'use client';
import { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingCart() {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => setOpen(!open);

  // Close on outside click
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
      </button>

      {/* Floating Cart Preview Box */}
      {open && (
        <div
          ref={cartRef}
          className="fixed right-[90px] top-1/2 -translate-y-1/2 w-[320px] bg-white/60 backdrop-blur-[16px] rounded-xl z-40 border-[2px] border-[#40023F] shadow-[-3px_3px_0px_0px_#000000]"
        >
          {/* Single Cart Item (mockup) */}
          <div className="flex items-center p-4">
            <img
              src="/pulp1.png"
              alt="Pulp+ Coconut"
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div>
              <div className="font-semibold text-[#40023F]">Pulp+ Coconut Flavour</div>
              <div className="text-sm text-gray-700">12×320ml</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
