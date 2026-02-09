import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

export function ResultsSection() {
  const results = [
    {
      quote:
        "Reduced executive meeting overhead by 11+ hours per week through governance redesign.",
      attribution: "Enterprise Telecom, VP-Level Engagement",
      metric: "11+",
      metricLabel: "HRS/WK SAVED",
    },
    {
      quote:
        "Built and launched a membership platform from zero — brand identity through production deployment in under 6 weeks.",
      attribution: "VAULT54NYC",
      metric: "6",
      metricLabel: "WEEK DELIVERY",
    },
    {
      quote:
        "Designed the ValueVerse — a presentation showcasing brand demographics across a multi-billion dollar portfolio for C-suite review.",
      attribution: "Fortune 10 Corporation",
      metric: "F10",
      metricLabel: "C-SUITE DELIVERY",
    },
    {
      quote:
        "Operationalized disaster relief offers, Capex prioritization models, and cross-functional program governance from scratch.",
      attribution: "National Carrier",
      metric: "100%",
      metricLabel: "FROM SCRATCH",
    },
    {
      quote:
        "Integrated CRM, email marketing, and automated workflows into a single cohesive operational system — replacing 5 disconnected tools.",
      attribution: "Growth-Stage Startup",
      metric: "5→1",
      metricLabel: "TOOLS UNIFIED",
    },
    {
      quote:
        "Created comprehensive brand guidelines, website, and employee onboarding system — all documented and handed off with training.",
      attribution: "Professional Services Firm",
      metric: "100%",
      metricLabel: "SELF-SUFFICIENT",
    },
  ];

  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
              03 — REAL OUTCOMES
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
            WE MEASURE SUCCESS IN{" "}
            <span className="text-gold-gradient text-glow">SYSTEMS BUILT.</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-4xl mb-20">
            Every engagement ends with something real — a system deployed, a
            process documented, a team trained. Here's what that looks like.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {results.map((result, idx) => (
            <StaggerItem key={idx}>
              <div className="floating-card rounded-2xl p-6 md:p-8 h-full flex flex-col group">
                {/* Metric highlight */}
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-gold-gradient text-glow mb-1">
                    {result.metric}
                  </div>
                  <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                    {result.metricLabel}
                  </p>
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6">
                  <span className="text-2xl text-[#D4AF37] font-light leading-none block mb-2 opacity-60">
                    "
                  </span>
                  <p className="text-[#E5E5E5] leading-relaxed italic">
                    {result.quote}
                  </p>
                </div>

                {/* Attribution */}
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-xs text-[#D4AF37] tracking-wide font-medium">
                    — {result.attribution}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
