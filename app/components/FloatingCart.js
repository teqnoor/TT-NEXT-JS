// components/FloatingCart.js
import { FiShoppingCart } from "react-icons/fi";

export default function FloatingCart() {
  return (
    <button
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
      aria-label="Cart"
    >
      <FiShoppingCart className="text-[#40023F] text-xl" />
    </button>
  );
}