import { Link } from "react-router";
import { AnimatedSection } from "./AnimatedSection";

export function BookCallSection() {
  return (
    <section id="book-call" className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="floating-card rounded-3xl p-8 md:p-12 text-center border-2 border-[#D4AF37]/30">
            <div className="inline-block mb-6">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
                READY TO START?
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
              BOOK A{" "}
              <span className="text-gold-gradient text-glow">
                STRATEGY CALL.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto mb-6">
              30-minute discovery call. No decks. No pitches. Just an honest
              conversation about what you're building and whether we're the right
              team to build it.
            </p>

            <p className="text-[#D4AF37] text-sm tracking-wide mb-12">
              16+ years experience · PMP® · CCOS · CFE · Fortune 10 background
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="floating-card rounded-full px-12 py-5 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group"
              >
                <span>SCHEDULE NOW</span>
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="/lightening-fast-services"
                className="floating-card rounded-full px-12 py-5 text-[#F5E6B8] text-lg font-medium tracking-wide border-2 border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                LIGHTENING FAST SERVICES
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
