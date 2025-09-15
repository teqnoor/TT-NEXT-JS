"use client";
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
     className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 shadow-[0px_2px_45px_0px_#0000005E]"
      onClick={() => setIsOpen(false)} // close when clicking outside
    >
      <div
        className="bg-[#CBE22F] rounded-2xl shadow-lg w-[90%] max-w-4xl flex flex-col md:flex-row overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Left side - Text */}
        <div className="p-[30px] md:w-1/2">
          <h2 className="eczar text-xl font-bold text-green-800">
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

          <div className="mt-5 flex gap-3">
            <button className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 rounded-full">
              Read More
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full">
              Discover Pulp+
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2  flex items-center justify-center p-4">
          <img
            src="/pulp_award.jpg"
            alt="Pulp+ Award"
            className="rounded-lg h-full w-auto object-contain"
          />
        </div>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
