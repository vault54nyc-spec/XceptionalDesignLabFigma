import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ========== HERO CONTENT ========== */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 w-full pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Typography */}
          <div className="space-y-10">
            {/* Micro-label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <p className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                OPERATIONS × STRATEGY × DESIGN
              </p>
              <div className="w-28 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-3" />
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#FAFAFA] leading-[0.9] tracking-[-0.02em]"
            >
              WE BUILD THE BUSINESSES THAT{" "}
              <span className="text-gold-gradient text-glow">WIN</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-xl md:text-2xl text-[#D0D0D0] leading-relaxed max-w-2xl"
            >
              Xceptional Design Lab is a full-spectrum business operations and
              strategy practice for companies that demand more than
              surface-level solutions. 16+ years of Fortune 10 enterprise
              experience across operations, finance, technology, and brand —
              distilled into an enterprise-grade service catalog that transforms how your business runs,
              looks, and grows.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-6 text-xs tracking-[0.2em] text-[#D0D0D0] uppercase"
            >
              <span>
                PMP® Certified
              </span>
              <span className="text-[#D4AF37]/40">|</span>
              <span>Fortune 10 Experience</span>
              <span className="text-[#D4AF37]/40">|</span>
              <span>Full-Stack Practice</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/case-studies"
                className="floating-card rounded-full px-8 py-4 text-[#FAFAFA] group"
              >
                <span className="tracking-wide font-medium">
                  VIEW OUR WORK
                </span>
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform text-[#D4AF37]">
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="floating-card rounded-full px-8 py-4 text-[#D4AF37] border-[#D4AF37]"
              >
                <span className="tracking-wide font-medium">
                  BOOK A STRATEGY CALL
                </span>
              </Link>
              <Link
                to="/lightening-fast-services"
                className="floating-card rounded-full px-8 py-4 text-[#F5E6B8] border border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <span className="tracking-wide font-medium">
                  LIGHTENING FAST SERVICES
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Photo with Credentials Badge */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative lg:justify-self-end w-full max-w-[7000px] space-y-8"
          >
            {/* Photo container */}
            <div className="relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/Black%20Minimalist%20Favorite%20Part%20Podcast%20Desktop%20Wallpaper%20(4).png"
                  alt="Christopher DeMarkus, Founder & Principal"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Credentials Badge - Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="floating-card rounded-2xl p-6 md:p-8 border-glow-strong"
            >
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
                  CHRISTOPHER DEMARKUS
                </h3>
                <p className="text-[#D4AF37] text-sm tracking-wide font-medium">
                  Founder & Principal
                </p>

                <div className="pt-3 border-t border-[#D4AF37]/30 space-y-2">
                  <p className="text-[#D0D0D0] text-sm leading-relaxed">
                    <span className="text-[#F5E6B8] font-medium">
                      PMP® · CCOS · CFE
                    </span>
                  </p>
                  <p className="text-[#D0D0D0] text-sm leading-relaxed">
                    Verizon | Portfolio & Program Management
                  </p>
                  <p className="text-[#D4AF37] text-sm font-medium">
                    16+ Years | Strategy × Operations × Finance × Technology × Brand
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce z-10"
      >
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-light">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
}
