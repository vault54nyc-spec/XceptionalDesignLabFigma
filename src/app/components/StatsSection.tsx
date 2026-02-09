import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [target, duration, trigger]);

  return count;
}

function AnimatedStat({
  value,
  suffix,
  prefix,
  label,
  isText,
  delay,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isText?: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, 2200, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection delay={delay} direction="up">
      <div ref={ref} className="text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient text-glow mb-3">
          {isText ? isText : `${prefix || ""}${count}${suffix || ""}`}
        </div>
        <p className="text-[#A0A0A0] text-sm md:text-base">{label}</p>
      </div>
    </AnimatedSection>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-24 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="floating-card rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <AnimatedStat
                value={16}
                suffix="+"
                label="YEARS ENTERPRISE EXPERIENCE"
                delay={0}
              />
              <AnimatedStat
                value={61}
                label="SERVICES OFFERED"
                delay={0.1}
              />
              <AnimatedStat
                value={3}
                label="CERTIFICATIONS"
                delay={0.2}
              />
              <AnimatedStat
                value={10}
                isText="F10"
                label="FORTUNE 10 EXPERIENCE"
                delay={0.3}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}