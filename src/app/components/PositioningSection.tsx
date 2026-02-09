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
            NOT AN AGENCY.{" "}
            <span className="text-gold-gradient text-glow">A STUDIO.</span>
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
                  'A design agency that asks, "What\'s your brand color?"',
                  'A template shop peddling off-the-shelf "solutions."',
                  "A vendor that disappears after the logo's delivered.",
                  "A team that charges by the hour and drags it out.",
                  "A freelancer juggling 20 clients with no process.",
                ].map((text, idx) => (
                  <StaggerItem key={idx}>
                    <li className="text-[#A0A0A0] text-lg flex items-start gap-3 list-none">
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
                  "We're the team that builds the website AND the CRM AND the email system AND the workflows that keep it all running.",
                  "We're the team that documents everything, trains your people, and makes you self-sufficient.",
                  "We're backed by 16+ years of Fortune 10 enterprise experience, PMP® certification, and three professional credentials.",
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
                    We don't design decoration. We design infrastructure.
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
