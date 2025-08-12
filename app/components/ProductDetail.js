"use client";
import { useEffect, useState } from "react";
import RelatedProductsSlider from "./RelatedProduct";
import { usePathname } from "next/navigation";
import AlertBar from "./AlertBar";
import Image from "next/image";

export default function ProductDetail({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    // Perform add-to-cart logic here...
    setShowAlert(true);
  };

  useEffect(() => {
    if (!slug) return;

    // Step 1: Get ID from slug
    fetch(`https://tigertigerfoods.com/api/get-products`)
      .then((res) => res.json())
      .then((res) => {
        const found = res.data.find((p) => p.slug === slug);
        if (!found) throw new Error("Product not found");

        // Step 2: Fetch detail using ID
        return fetch(
          `https://tigertigerfoods.com/api/get-product-detail/${found.id}`
        );
      })
      .then((res) => res.json())
      .then((detailRes) => {
        setProduct(detailRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slug]);

  const shouldOffset = pathname !== "/";


  return (
    <section className="py-12 px-6 md:px-0">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        {/* Alert Bar */}
        <AlertBar
          show={showAlert}
          message="Product added to inquiry cart."
          onClose={() => setShowAlert(false)}
        />

        {/* Loading / No record found / Content */}
        {loading ? (
          <div className="p-6">Loading...</div>
        ) : !product ? (
          <div className="p-6 text-red-500">Product not found</div>
        ) : (
          <>
            <div className="max-w-6xl mx-auto mb-6 mt-4">
              <h1 className="eczar text-[32px] font-semibold">
                Product Detail
              </h1>
              <p>
                Product {">"} {product.name}
              </p>
            </div>

            <div className="max-w-6xl mx-auto flex gap-6 items-start mb-6">
              <div className="mb-6 md:mb-0 flex justify-center">
                <Image
                  src={product.images}
                  alt={product.name}
                  width={550}
                  height={400}
                  className="rounded-xl h-[500px] object-cover"
                />
              </div>
              <div className="text-[#220016]">
                <div className="border border-[#220016] bg-[#FFF0B4] rounded p-[36px] mb-4">
                  <h2 className="eczar font-semibold text-[32px]">
                    {product.name}
                  </h2>
                  <p className="text-sm">{product.quantity}</p>
                </div>
                <div className="bg-[#fff0b4] border border-[#220016] rounded p-[36px] mb-6">
                  <h3 className="font-bold text-lg mb-3">Details</h3>
                  {[
                    ["SKU", product.SKU],
                    ["JK Code", product.jk_code],
                    ["Palette Quantity", product.palette_quantity],
                    ["Case Barcode", product.case_barcode],
                    ["Single Barcode", product.single_unit_barcode],
                    ["Brand", product.brand],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between text-sm py-1 border-b border-[#0000004F]"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-[#40023F] text-white px-4 py-2 rounded-xl font-medium">
                    Case
                  </button>
                  <button className="bg-transparent text-black border-[2px] border-[#40023F] rounded-xl px-4 py-2 font-medium">
                    Palette
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#9747FF] text-white px-4 py-2 rounded-xl font-medium"
                  >
                    Add to Inquiry
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-6">
              <h2 className="eczar text-[32px] font-semibold">
                Product Description
              </h2>
              <p className="text-justify">{product.description}</p>
            </div>

            <section className="max-w-6xl mx-auto py-12 px-6 md:px-0">
              <RelatedProductsSlider product_id={product.id} />
            </section>
          </>
        )}
      </div>
    </section>
  );
}
