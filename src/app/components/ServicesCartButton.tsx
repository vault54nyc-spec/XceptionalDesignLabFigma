import { Link } from "react-router";
import { useServicesCart } from "../context/ServicesCartContext";

export function ServicesCartButton() {
  const { selectedServices } = useServicesCart();
  const count = selectedServices.length;

  if (count === 0) return null;

  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 floating-card bg-[#D4AF37] text-black rounded-full px-6 py-4 flex items-center gap-3 shadow-2xl hover:bg-[#B8962E] transition-all duration-300 group"
    >
      <div className="relative">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-black text-[#D4AF37] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm font-bold leading-tight">
          {count} SERVICE{count !== 1 ? 'S' : ''}
        </span>
        <span className="text-xs opacity-90 leading-tight">View Consultation →</span>
      </div>
    </Link>
  );
}
