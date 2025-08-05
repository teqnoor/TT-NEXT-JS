"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RelatedProductsSlider from "./RelatedProduct";
import AlertBar from "./AlertBar";

export default function ProductDetail({ product_detail }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    // Perform add-to-cart logic here...
    setShowAlert(true);
  };

  useEffect(() => {
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
  }, []);

  const shouldOffset = pathname !== "/";

  return (
    <>
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
          <div className="max-w-6xl mx-auto mb-6">
            <h1 className="eczar text-[32px] font-semibold">Product Detail</h1>
            <p>
              Product {">"} {product_detail}
            </p>
          </div>
          <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-start mb-6">
            <div className="mb-6 md:mb-0 flex justify-center">
              <Image
                src="/pulp1.png"
                alt="Pulp"
                width={550}
                height={400}
                className="rounded-xl h-[500px] object-cover"
              />
            </div>
            <div className="text-[#220016]">
              <div className="border border-[#220016] bg-[#FFF0B4] rounded p-[36px] mb-4">
                <h2 className="eczar font-semibold text-[32px] ">
                  PULP MANGO JUICE WITH PULP
                </h2>
                <p className="text-sm">12×320ml</p>
              </div>
              <div className="bg-[#fff0b4] border border-[#220016] rounded p-[36px] mb-6">
                <h3 className="font-bold text-lg mb-3">Details</h3>
                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>SKU</span>
                  <span>800770</span>
                </div>

                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>JK Code</span>
                  <span>800770</span>
                </div>

                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>Palette Qunantity</span>
                  <span>800770</span>
                </div>

                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>Case Barcode</span>
                  <span>800770</span>
                </div>

                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>Single Barcode</span>
                  <span>800770</span>
                </div>

                <div className="flex justify-between text-sm py-1 border-b border-[#0000004F]">
                  <span>Brand</span>
                  <span>800770</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-[#40023F] text-white text-[#220016] px-4 py-2 rounded-xl font-medium">
                  Case
                </button>
                <button className="bg-transparent text-black border-[2px] border-[#40023F]  rounded-xl text-[#220016] px-4 py-2 font-medium">
                  Palette
                </button>
                <button
                  onClick={handleAddToCart}
                  className="bg-[#9747FF] text-white text-[#220016] px-4 py-2 rounded-xl font-medium"
                >
                  Add to Inquiry
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto  mb-6">
            <h2 className="eczar text-[32px] font-semibold">
              Product Description
            </h2>
            <p className="text-justify">
              This Tiger Tiger PULP+ 100% Real Mango Juice delivers an authentic
              tropical experience with every sip. Made from real mango fruit and
              containing natural pulp pieces, this premium juice offers the
              rich, creamy texture and intense flavor that mango lovers crave.
              What sets this product apart is its commitment to purity - it's
              never made from concentrate and contains no added sugar, allowing
              the natural sweetness and vibrant taste of the mango to shine
              through. The convenient 330ml can makes it perfect for on-the-go
              refreshment, whether you're looking for a healthy breakfast drink,
              an afternoon pick-me-up, or a taste of the tropics any time of
              day. Winner of the UK Soft Drinks Awards, this juice represents
              Tiger Tiger's dedication to unleashing authentic taste while
              maintaining the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6 md:px-0">
        <RelatedProductsSlider />
      </section>
    </>
  );
}
