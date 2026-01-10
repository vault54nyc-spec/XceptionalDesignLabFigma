import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/operations", label: "Operations" },
    { href: "/technical", label: "Technical" },
    { href: "/communications", label: "Communications" },
    { href: "/design", label: "Design" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Benjamin Aesthetic - Vertical Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-[100px] md:w-[100px] sm:w-[60px] bg-[#D4AF37] z-50 flex flex-col items-center justify-between py-8">
        
        {/* Logo - Vertical Text Rotated 180deg */}
        <Link href="/">
          <div 
            className="cursor-pointer transition-opacity hover:opacity-80"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              letterSpacing: '2px'
            }}
          >
            <span className="text-black font-bold text-lg tracking-wider">
              XCEPTIONAL.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Vertical Text Rotated 180deg */}
        <div className="hidden md:flex flex-col items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`cursor-pointer transition-all hover:opacity-70 ${
                  location === link.href ? 'font-bold opacity-100' : 'opacity-80'
                }`}
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                <span className="text-black text-sm tracking-wide">
                  {link.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button - Vertical */}
        <Link href="/contact">
          <div
            className="hidden md:block bg-black text-[#D4AF37] px-4 py-6 cursor-pointer transition-all hover:bg-[#2C2C2C]"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            <span className="font-bold text-sm tracking-wider">
              BOOK CALL
            </span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-[60px] top-0 bottom-0 w-64 bg-white shadow-2xl p-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold mb-4 text-black">Menu</h3>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`py-2 text-base font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-black hover:text-[#D4AF37]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <div
                  className="mt-4 bg-black text-[#D4AF37] px-6 py-3 text-center font-bold cursor-pointer hover:bg-[#2C2C2C] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Call
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
