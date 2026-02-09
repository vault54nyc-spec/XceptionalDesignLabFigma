import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function ComparisonSection() {
  const comparisons = [
    {
      them: "Delivers a logo and disappears",
      us: "Builds the brand system, deploys it, and trains your team",
    },
    {
      them: '"We\'ll get back to you"',
      us: "Same-week turnaround on strategy calls",
    },
    {
      them: "Design-only, no backend",
      us: "Full-stack: design, development, infrastructure, automation",
    },
    {
      them: "Cookie-cutter templates",
      us: "Custom architecture for every engagement",
    },
    {
      them: "Avoids the hard conversations",
      us: "Tells you what you need to hear, then builds the solution",
    },
    {
      them: "Charges by the hour, drags it out",
      us: "Scoped engagements with transparent pricing",
    },
  ];

  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Label */}
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
              04 — THE DIFFERENCE
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-20">
            WE'RE NOT YOUR{" "}
            <span className="text-gold-gradient text-glow">TYPICAL AGENCY.</span>
          </h2>
        </AnimatedSection>

        {/* Comparison Container */}
        <AnimatedSection delay={0.2}>
          <div className="floating-card rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 divide-x divide-[#D4AF37]/20">
              {/* Left Column - THEM */}
              <div className="p-6 md:p-10">
                <h3 className="text-3xl font-bold text-[#A0A0A0] mb-12 uppercase tracking-wide">
                  THEM
                </h3>
                <StaggerContainer className="space-y-8" staggerDelay={0.06}>
                  {comparisons.map((item, index) => (
                    <StaggerItem key={index} direction="left">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#A0A0A0]/30 mt-1" />
                        <p className="text-[#A0A0A0] leading-relaxed">
                          {item.them}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Right Column - US */}
              <div className="p-6 md:p-10 relative">
                {/* Gold accent */}
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                <h3 className="text-3xl font-bold text-[#D4AF37] mb-12 uppercase tracking-wide">
                  US
                </h3>
                <StaggerContainer className="space-y-8" staggerDelay={0.06}>
                  {comparisons.map((item, index) => (
                    <StaggerItem key={index} direction="right">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mt-1">
                          <span className="text-black text-xs">✓</span>
                        </div>
                        <p className="text-[#F5E6B8] leading-relaxed font-medium">
                          {item.us}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
