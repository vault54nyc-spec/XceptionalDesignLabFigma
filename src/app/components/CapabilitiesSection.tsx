import { Link } from "react-router";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function CapabilitiesSection() {
  const capabilities = [
    {
      number: "01",
      title: "Strategic Operations & Advisory",
      description:
        "We start with the business problem — then we build the operational solution around it.",
      route: "/services/strategic-consulting",
    },
    {
      number: "02",
      title: "Brand, Communications & Creative",
      description:
        "Every brand asset we create is built on audience research, competitive analysis, and long-term strategy — then made to look exceptional.",
      route: "/services/brand-identity",
    },
    {
      number: "03",
      title: "Digital Presence & Web Development",
      description:
        "Technology built to perform, convert, and scale — engineered with the same rigor we bring to enterprise operations.",
      route: "/services/digital-platforms",
    },
    {
      number: "04",
      title: "Financial Operations & Compliance",
      description:
        "From cash flow management to compliance frameworks — financial clarity that fuels confident decisions.",
      route: "/services/communications",
    },
    {
      number: "05",
      title: "Campaigns & Content",
      description: "Strategic storytelling across every channel that matters.",
      route: "/services/communications",
    },
    {
      number: "06",
      title: "Program & Project Leadership",
      description:
        "End-to-end program governance, process optimization, and operational infrastructure — from startup scale to enterprise complexity.",
      route: "/services/operational-design",
    },
    {
      number: "07",
      title: "AI Integration & Transformation",
      description: "Workflow automation, intelligent tools, and future-proof operations.",
      route: "/services/technical-services",
    },
  ];

  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Label */}
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
              02 — WHAT WE BUILD
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
            SEVEN VERTICALS.{" "}
            <span className="text-gold-gradient text-glow">
              ONE STANDARD: EXCEPTIONAL.
            </span>
          </h2>
          <p className="text-xl text-[#D0D0D0] leading-relaxed max-w-4xl mb-20">
            Enterprise services across 7 disciplines — each backed by 16+ years of
            enterprise experience, three professional certifications, and a
            Fortune 10 pedigree. Click any capability to explore the full
            service catalog.
          </p>
        </AnimatedSection>

        {/* Capabilities Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {capabilities.map((capability) => (
            <StaggerItem key={capability.number}>
              <Link
                to={capability.route}
                className="glass-card rounded-2xl p-8 group block h-full"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-light text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                    {capability.number}
                  </span>
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
                    <span className="text-[#D4AF37] group-hover:text-[#FAFAFA] transition-colors font-bold">
                      →
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4 leading-tight">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-[#D0D0D0] leading-relaxed">
                  {capability.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
