import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface EntranceAnimationProps {
  onComplete: () => void;
}

export function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    // Delay slightly before calling onComplete to allow fade animation
    setTimeout(() => onComplete(), 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVideoEnded ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
          playsInline
          muted={false}
        >
          <source
            src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/Xceptional%20Design%20Lab%20(1).mp4"
            type="video/mp4"
          />
        </video>

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