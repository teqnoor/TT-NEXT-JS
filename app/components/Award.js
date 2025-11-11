"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Award() {
  const [isOpen, setIsOpen] = useState(false);

  // Open on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3"
      onClick={() => setIsOpen(false)} // close when clicking outside
    >
      <div
        className="bg-[#CBE22F] rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Scrollable content wrapper */}
        <div className="flex flex-col md:flex-row w-full overflow-y-auto">
          {/* Left side - Text */}
          <div className="p-4 sm:p-6 md:p-[30px] md:w-1/2">
            <h2 className="eczar text-lg sm:text-xl font-bold text-green-800">
              Tiger Tiger’s Pulp+ Mango Awarded 'Best Fruit Juice Drink' at UK Soft Drinks Awards 2025
            </h2>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              We're absolutely thrilled to share some fantastic news – our Pulp+
              Mango has just scooped up the 'Best Fruit Juice Drink' award at the
              2025 UK Soft Drinks Awards by FoodBev Awards!
            </p>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              This recognition means the world to us, especially coming from such
              a respected industry event that celebrates the very best in
              innovation and quality across the UK's competitive soft drinks
              scene. The award was presented at the UK Soft Drinks Conference,
              where all the industry's top players – from producers and retailers
              to the brilliant minds shaping the future of beverages – come
              together to celebrate what's next.
            </p>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              It's incredible validation that our commitment to creating drinks
              people genuinely love is hitting the mark. Here's to many more sips
              of award-winning goodness!
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              
              <Link href='product-ranges' className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                Discover More
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2 flex items-center justify-center p-3 sm:p-4">
            <img
              src="/pulp_award.jpg"
              alt="Pulp+ Award"
              className="rounded-lg max-h-[250px] sm:max-h-[320px] md:max-h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
