"use client";
import { useEffect, useState } from "react";
import RelatedProductsSlider from "./RelatedProduct";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 import styles
export default function ProductDetail({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  const handleAddToCart = () => {
    // ✅ Check login first
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first to add products to inquiry.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!selectedUnit) {
      alert("Please select either Case or Palette before adding to inquiry.");
      return;
    }
    // Store in sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("inquiry_cart") || "[]");
    const newQuantity =
      selectedUnit === "palette" ? product.palette_quantity : 1;
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.unit === selectedUnit
    );
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += newQuantity;
    } else {
      const item = {
        id: product.id,
        product_id: product.id,
        name: product.name,
        unit: selectedUnit,
        quantity: newQuantity,
        product_quantity: product.quantity,
        sku: product.SKU,
        images: product.images,
      };
      cart.push(item);
    }
    sessionStorage.setItem("inquiry_cart", JSON.stringify(cart));

    // 🔥 Fire custom event
    window.dispatchEvent(new Event("cartUpdated"));
    // 👇 show success toast instead of alert
    toast.success(`Product added to enquiry!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    if (!slug) return;

    // Step 1: Get ID from slug
    fetch(`https://backend.tigertigerfoods.com/api/get-products`)
      .then((res) => res.json())
      .then((res) => {
        const found = res.data.find((p) => p.slug === slug);
        if (!found) throw new Error("Product not found");

        // Step 2: Fetch detail using ID
        return fetch(
          `https://backend.tigertigerfoods.com/api/get-product-detail/${found.id}`
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
        <ToastContainer />

        {/* Loading / No record found / Content */}
        {loading ? (
          <div className="p-6">Loading...</div>
        ) : !product ? (
          <div className="p-6 text-red-500">Product not found</div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto mb-6 mt-10 md:mt-16 px-4 md:px-0">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* LEFT: Product Image */}
                <div className="flex flex-col items-start">
  {/* Product Image */}
  <div className="flex justify-center w-full">
    <Image
      src={product.images}
      alt={product.name}
      width={500}
      height={500}
      className="rounded-3xl object-cover w-full h-[500px] max-w-[500px]"
    />
  </div>

  {/* Category Badge under image */}
  <div className="mt-4 flex flex-wrap gap-2">
    <span className="bg-[#B0C426] text-[#fff] text-sm font-medium px-4 py-1 rounded-full">
      {product.categories}
    </span>
  </div>
</div>


                {/* RIGHT: Product Info */}
                <div>
                  {/* Product Name + Size */}
                  <h1 className="text-[#556D08] eczar text-[32px] md:text-[32px]  mb-2 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-base md:text-lg text-[#556D08]/80 mb-8">
                    {product.quantity}
                  </p>

                  {/* DETAILS CARD */}
                  <div className="mb-8">
                    <h2 className="text-[#556D08] text-xl font-semibold mb-4">
                      Details
                    </h2>
                    <div className="divide-y divide-[#556D08] text-[#556D08]/90">
                      {[
                        ["SKU", product.SKU],
                        ["JK CODE", product.jk_code],
                        ["PALLET QUANTITY", product.palette_quantity],
                        ["CASE BARCODE", product.case_barcode],
                        ["SINGLE BARCODE", product.single_unit_barcode],
                        ["BRAND", product.brand],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex justify-between py-2 text-sm"
                        >
                          <span className="font-medium">{label}</span>
                          <span>{value || ""}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={() => handleSelectUnit("case")}
                      className={`px-6 py-2.5 rounded-xl font-semibold border transition-all duration-200 ${
                        selectedUnit === "case"
                          ? "bg-[#556D08] text-white border-[#556D08]"
                          : "bg-transparent text-[#556D08] border-[#556D08] hover:bg-[#556D08] hover:text-white"
                      }`}
                    >
                      Case
                    </button>

                    <button
                      onClick={() => handleSelectUnit("palette")}
                      className={`px-6 py-2.5 rounded-xl font-semibold border transition-all duration-200 ${
                        selectedUnit === "palette"
                          ? "bg-[#556D08] text-white border-[#556D08]"
                          : "bg-transparent text-[#556D08] border-[#556D08] hover:bg-[#556D08] hover:text-white"
                      }`}
                    >
                      Pallet
                    </button>

                    <button
                      onClick={handleAddToCart}
                      disabled={!selectedUnit}
                      className={`px-8 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 ${
                        !selectedUnit
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-[#556D08] hover:bg-[#435707] text-white"
                      }`}
                    >
                      Add to Inquiry
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 2.25h1.386a.75.75 0 0 1 .728.568l.862 3.445m0 0L6.75 15.75h10.5l1.524-6.088a.75.75 0 0 0-.728-.912H6.372m-1.146 0L4.5 3.75m4.5 12.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="max-w-7xl mx-auto px-4 md:px-0 mt-12 mb-12">
              <h2 className="text-[#556D08] eczar text-[32px] md:text-[32px] mb-4">
                Product Description
              </h2>
              <p className="text-[#444] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Related Products */}
            <section className="max-w-7xl mx-auto py-12 px-4 md:px-0">
              <RelatedProductsSlider product_id={product.id} />
            </section>
          </>
        )}
      </div>
    </section>
  );
}
