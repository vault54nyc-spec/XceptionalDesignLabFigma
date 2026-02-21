import { PageLayout } from "../components/PageLayout";
import { Link } from "react-router";
import { motion } from "motion/react";

export function NotFoundPage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FAFAFA] leading-[0.9] tracking-tight"
          >
            NOTHING HERE.{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gold-gradient text-glow block mt-6"
            >
              YET.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#D0D0D0] max-w-2xl mx-auto leading-relaxed"
          >
            This page doesn't exist — but we can build it. Let's get you back
            on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block floating-card rounded-full px-12 py-6 text-[#D4AF37] text-lg font-medium tracking-wide border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#FAFAFA] transition-all duration-300 group"
            >
              <span>BACK TO HOME</span>
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
