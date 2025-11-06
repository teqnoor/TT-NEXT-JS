"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const [count, setCount] = useState(0); // safe SSR value
  const [latestItem, setLatestItem] = useState(null); // store latest cart item

  const toggleCart = () => setOpen(!open);

  useEffect(() => {
    function updateCart() {
      const cart = JSON.parse(sessionStorage.getItem("inquiry_cart")) || [];
      setCount(cart.length);
      setLatestItem(cart.length > 0 ? cart[cart.length - 1] : null); // 👈 latest item
    }

    updateCart(); // run once on mount
    window.addEventListener("cartUpdated", updateCart); // custom event from ProductDetail
    window.addEventListener("storage", updateCart); // sync across tabs

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  // ✅ Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={toggleCart}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
        aria-label="Cart"
      >
        <FiShoppingCart className="text-[#40023F] text-xl" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#40023F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>

      {/* Floating Cart Preview Box */}
      {open && (
        <div
          ref={cartRef}
          className="fixed right-[90px] top-1/2 -translate-y-1/2 w-[320px] bg-white/60 backdrop-blur-[16px] rounded-xl z-40 border-[2px] border-[#40023F]"
        >
          {latestItem ? (
            <>
              <div className="flex items-center p-4 border-b border-[#40023F]/20">
                <img
                  src={latestItem.images}
                  alt={latestItem.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <div className="font-semibold text-[#40023F]">
                    {latestItem.name}
                  </div>
                  <div className="text-sm text-gray-700">
                    {latestItem.product_quantity} ({latestItem.unit})
                  </div>
                </div>
              </div>

              {/* ✅ View Enquiry link */}
              <div className="mt-3 mb-3 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          ) : (
            <>
            <div className="p-4 text-center text-gray-600">Cart is empty</div>
            {/* ✅ View Enquiry link */}
              <div className="mt-3 mb-3 text-center">
                <Link
                  href="/enquiry"
                  className="text-sm text-[#220016] underline"
                >
                  View Enquiry
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
