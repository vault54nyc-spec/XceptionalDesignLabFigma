import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

export function PositioningSection() {
  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-8">
            01 — POSITIONING
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight">
            NOT YOUR TYPICAL{" "}
            <span className="text-gold-gradient text-glow">OPERATIONAL PARTNER.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: What We're Not */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="floating-card rounded-3xl p-6 md:p-8 h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-6">
                WHAT WE'RE NOT.
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {[
                  "A typical firm gives you a deliverable and moves on.",
                  'A template shop peddling off-the-shelf "solutions."',
                  "A consultant gives you a strategy with no one to execute it. We give you the strategy behind it, the operational system that sustains it, the financial clarity to measure it — and then we make it all look world-class.",
                  "A team that charges by the hour and drags it out.",
                  "A freelancer juggling 20 clients with no process.",
                ].map((text, idx) => (
                  <StaggerItem key={idx}>
                    <li className="text-[#D0D0D0] text-lg flex items-start gap-3 list-none">
                      <span className="text-[#666] mt-1 flex-shrink-0">✗</span>
                      <span>{text}</span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Right: What We Are */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="floating-card rounded-3xl p-6 md:p-8 border-2 border-[#D4AF37]/30 h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
                WHAT WE ARE.
              </h3>
              <StaggerContainer
                className="space-y-4 text-[#E5E5E5] text-lg leading-relaxed"
                staggerDelay={0.08}
              >
                {[
                  "We're the team you call when the brand identity needs to match the business strategy.",
                  "We're the partner that builds your operational framework AND your technology stack AND your brand system AND the workflows that keep it all running — because we see the whole picture, not just one piece of it.",
                  "We're the team that documents everything, trains your people, and makes you self-sufficient.",
                  "Backed by 16+ years inside Fortune 10 operations — managing programs across four continents, auditing enterprise risk, leading cross-functional strategy, and turning complexity into competitive advantage.",
                ].map((text, idx) => (
                  <StaggerItem key={idx}>
                    <p className="flex items-start gap-3">
                      <span className="text-[#D4AF37] flex-shrink-0 mt-1">•</span>
                      <span>{text}</span>
                    </p>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <p className="text-[#F5E6B8] font-medium pt-4">
                    We don't deliver pieces. We build the whole machine — and we make it Xceptional.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
