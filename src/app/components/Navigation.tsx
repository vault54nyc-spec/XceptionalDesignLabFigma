import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { useServicesCart } from "../context/ServicesCartContext";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/case-studies", label: "PROJECTS" },
  { to: "/about", label: "ABOUT" },
  { to: "/services", label: "SERVICES" },
  { to: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { selectedServices } = useServicesCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 glass border-b border-[#D4AF37]/20 backdrop-blur-xl`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo — Large with strong gold glow */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg"
              alt="Xceptional Design Lab"
              className="h-14 sm:h-16 md:h-20 w-auto transition-all duration-500 group-hover:scale-110"
              style={{
                filter:
                  "drop-shadow(0 0 25px rgba(212, 175, 55, 0.8)) drop-shadow(0 0 50px rgba(212, 175, 55, 0.5)) drop-shadow(0 0 80px rgba(212, 175, 55, 0.3)) drop-shadow(0 0 120px rgba(212, 175, 55, 0.15))",
                mixBlendMode: "screen",
              }}
            />
          </Link>

          {/* All page titles always visible — horizontal layout */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-[10px] sm:text-xs md:text-sm tracking-wide transition-colors py-1 whitespace-nowrap"
                style={{
                  color: isActive(link.to) ? "#D4AF37" : "#FAFAFA",
                }}
              >
                <span className="hover:text-[#D4AF37] transition-colors">
                  {link.label}
                </span>
                {isActive(link.to) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Contact icons + Cart badge + CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Contact Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Phone */}
              <a
                href="tel:+15516559184"
                className="hover:opacity-70 transition-opacity"
                title="Call us"
              >
                <img
                  src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/3.png"
                  alt="Phone"
                  className="h-4 md:h-5 w-auto opacity-80"
                />
              </a>
              {/* Email */}
              <a
                href="mailto:xceptional.designlab@gmail.com"
                className="hover:opacity-70 transition-opacity"
                title="Email us"
              >
                <img
                  src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/MAIL.png"
                  alt="Email"
                  className="h-4 md:h-5 w-auto opacity-80"
                />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/X.Design.Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="Follow on Instagram"
              >
                <img
                  src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/IG.png"
                  alt="Instagram"
                  className="h-4 md:h-5 w-auto opacity-80"
                />
              </a>
            </div>

            {/* Cart Badge */}
            {selectedServices.length > 0 && (
              <Link
                to="/contact"
                className="relative flex items-center gap-1 text-[#D4AF37] hover:text-[#F5E6B8] transition-colors"
                title="View consultation cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {selectedServices.length}
                </span>
              </Link>
            )}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-block floating-card rounded-full px-4 md:px-6 py-2 md:py-3 bg-[#D4AF37] text-black text-xs md:text-sm tracking-wide hover:bg-[#B8962E] transition-all duration-300"
            >
              BOOK A CALL
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}