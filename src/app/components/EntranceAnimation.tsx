import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EntranceAnimationProps {
  onComplete: () => void;
}

export function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const [stage, setStage] = useState<"zoom" | "fade">("zoom");

  useEffect(() => {
    // Zoom out phase: 0-3 seconds
    const timer1 = setTimeout(() => setStage("fade"), 3000);
    // Fade out phase: 3-4 seconds
    const timer2 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main image with zoom-out animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 2.5 }}
          animate={{
            scale: stage === "zoom" ? 1 : 1,
            opacity: stage === "fade" ? 0 : 1,
          }}
          transition={{
            scale: {
              duration: 3,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
            opacity: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          <ImageWithFallback
            src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/F2E137CE-917F-444E-8B86-88F3832608C4_1_102_o.jpeg"
            alt="XDL Opening"
            className="w-full h-full object-cover"
          />
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Gold gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          onClick={onComplete}
          className="absolute bottom-12 right-12 glass rounded-full px-6 py-3 text-[#D4AF37] text-sm tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-medium z-20"
        >
          SKIP
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}