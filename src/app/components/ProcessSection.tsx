import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "DISCOVERY CALL",
    duration: "30 min",
    description:
      "Free strategy conversation. We learn about your business, your goals, and your pain points. No decks. No pitches. Just an honest assessment of what you need.",
  },
  {
    number: "02",
    title: "STRATEGY & SCOPING",
    duration: "1–2 weeks",
    description:
      "We audit your current state, research your competitive landscape, and develop a detailed scope of work with clear deliverables, timeline, and pricing.",
  },
  {
    number: "03",
    title: "DESIGN & BUILD",
    duration: "2–8 weeks",
    description:
      "Execution phase. Brand systems, websites, platforms, automations — whatever the scope calls for. Regular check-ins. No surprises. No scope creep.",
  },
  {
    number: "04",
    title: "DEPLOY & DOCUMENT",
    duration: "1–2 weeks",
    description:
      "Everything gets deployed to production, thoroughly tested, and documented. SOPs, user guides, admin credentials — the full operational handoff.",
  },
  {
    number: "05",
    title: "TRAIN & TRANSFER",
    duration: "Included",
    description:
      "Your team gets trained on everything we built. Screen recordings, live walkthroughs, Q&A sessions. You leave fully self-sufficient. No dependency. No retainers required.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
              OUR PROCESS
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
            HOW WE{" "}
            <span className="text-gold-gradient text-glow">WORK.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-4xl mb-20">
            Every engagement follows the same proven framework. No shortcuts.
            No ambiguity. Just a clear path from conversation to completion.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.1}>
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="floating-card rounded-2xl p-6 md:p-8 group hover:border-[#D4AF37]/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl md:text-6xl font-bold text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#FAFAFA]">
                        {step.title}
                      </h3>
                      <span className="glass rounded-full px-3 py-1 text-[#D4AF37] text-xs tracking-wider font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-lg text-[#A0A0A0] leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                  {/* Arrow/connector */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center text-[#D4AF37] opacity-30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
