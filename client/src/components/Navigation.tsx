import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation order: Home → About → Operations → Technical → Communications → Design → Packages → Services → Portfolio
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/operations", label: "Operations" },
    { href: "/technical", label: "Technical" },
    { href: "/communications", label: "Communications" },
    { href: "/design", label: "Design" },
    { href: "/packages", label: "Packages" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Portfolio" },
  ];

  return (
    <>
      {/* Benjamin Aesthetic - Vertical Sidebar Navigation */}
      {/* ✅ FIXED: Added overflow-y-auto for scrollability */}
      <nav 
        className="fixed left-0 top-0 h-full w-[100px] md:w-[100px] sm:w-[60px] bg-[#D4AF37] z-50 flex flex-col items-center py-8 overflow-y-auto overflow-x-hidden"
        style={{ 
          maxHeight: '100vh',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.3) transparent'
        }}
      >
        {/* Logo - Image */}
        <Link href="/home">
          <div className="cursor-pointer transition-opacity hover:opacity-80 mb-8 flex-shrink-0">
            <img 
              src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/LOGO.png" 
              alt="Xceptional Design Lab"
              className="w-16 h-16 object-contain"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.6))'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))'}
            />
          </div>
        </Link>

        {/* CTA Button - Vertical - AT TOP */}
        <a href="#book-call">
          <div
            className="hidden md:block bg-black text-[#D4AF37] px-4 py-6 cursor-pointer transition-all hover:bg-[#2C2C2C] mb-8 flex-shrink-0"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <span className="font-bold text-sm tracking-wider">BOOK CALL</span>
          </div>
        </a>

        {/* Desktop Navigation Links - Vertical Text Rotated 180deg */}
        <div className="hidden md:flex flex-col items-center gap-6 flex-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <div
                className={`cursor-pointer transition-all hover:opacity-70 ${
                  location === link.href
                    ? "font-bold opacity-100"
                    : "opacity-80"
                }`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <span className="text-black text-sm tracking-wide">
                  {link.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black p-2 mt-auto flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* ✅ FIXED: Reversed order for mobile + added overflow-y-auto */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-[60px] top-0 bottom-0 w-64 bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold mb-4 text-black">Menu</h3>
              
              {/* Book Call Button First */}
              <a href="#book-call" onClick={() => setMobileMenuOpen(false)}>
                <div
                  className="bg-black text-[#D4AF37] px-6 py-3 text-center font-bold cursor-pointer hover:bg-[#2C2C2C] transition-all rounded"
                >
                  Book a Call
                </div>
              </a>
              
              {/* Navigation Links in Reversed Order */}
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`py-2 text-base font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-[#D4AF37] font-bold"
                        : "text-black hover:text-[#D4AF37]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS for custom scrollbar (webkit browsers) */}
      <style>{`
        nav::-webkit-scrollbar {
          width: 4px;
        }
        nav::-webkit-scrollbar-track {
          background: transparent;
        }
        nav::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 2px;
        }
        nav::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
