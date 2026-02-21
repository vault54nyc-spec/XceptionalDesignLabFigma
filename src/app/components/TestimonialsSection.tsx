import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "XDL didn't just design our portal — they built the full operational backbone behind it. Website, communications workflow, resource structure, documentation, and implementation. We went from concept to a functioning chapter command center in 6 weeks.",
    name: "Client Leadership Team",
    org: "See case study or example here.",
    highlight: "Portal launched in 6 weeks",
  },
  {
    quote:
      "Most agencies deliver a logo and disappear. Christopher delivered a brand system, trained our team, documented everything, and made us completely self-sufficient. That's rare.",
    name: "Client Founder",
    org: "See case study or example here.",
    highlight: "Full self-sufficiency",
  },
  {
    quote:
      "The governance framework he built reduced our executive meeting overhead by over 11 hours per week. That's not design — that's operational intelligence applied to real business problems.",
    name: "Program Leader",
    org: "See case study or example here.",
    highlight: "11+ hrs/week saved",
  },
  {
    quote:
      "We needed someone who could think at the executive level and execute at the pixel level. Christopher is one of the only people I've met who can do both — and document the entire thing so your team can run it.",
    name: "Client Partner",
    org: "See case study or example here.",
    highlight: "Executive + execution",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-8">
              CLIENT EXPERIENCES
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight">
              DON'T TAKE OUR WORD.{" "}
              <span className="text-gold-gradient text-glow">
                TAKE THEIRS.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((t, idx) => (
            <StaggerItem key={idx}>
              <div className="floating-card rounded-2xl p-6 md:p-8 h-full flex flex-col">
                {/* Highlight tag */}
                <div className="mb-4">
                  <span className="inline-block glass rounded-full px-4 py-1.5 text-[#D4AF37] text-[10px] tracking-[0.15em] uppercase font-medium">
                    {t.highlight}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6">
                  <span className="text-3xl text-[#D4AF37] font-light leading-none block mb-3 opacity-50">
                    "
                  </span>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                {/* Attribution */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FAFAFA] text-sm font-bold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#F5E6B8] font-medium text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#D4AF37] text-xs tracking-wide">
                      {t.org}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
