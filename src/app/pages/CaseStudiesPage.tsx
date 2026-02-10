import { Helmet } from "react-helmet-async";
import { PageLayout } from "../components/PageLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

const projects = [
  {
    title: "VAULT54NYC",
    category: "BRAND IDENTITY · DIGITAL PLATFORM · MEMBERSHIP",
    description:
      "Built and launched an exclusive membership platform from zero — complete brand identity system, custom web application, member management infrastructure, and automated onboarding workflows.",
    results: [
      "Full brand system delivered in 4 weeks",
      "Custom membership platform built & deployed",
      "Automated member onboarding & billing",
    ],
    image:
      "https://images.unsplash.com/photo-1759563874711-b026ac0b6c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwZGFya3xlbnwxfHx8fDE3NzA1NDQxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    title: "ENTERPRISE TELECOM GOVERNANCE",
    category: "OPERATIONAL DESIGN · STRATEGIC CONSULTING",
    description:
      "Redesigned executive meeting governance and program management structure for a national carrier, reducing VP-level overhead by 11+ hours per week while improving cross-functional alignment.",
    results: [
      "11+ hours/week overhead reduction",
      "Governance framework operationalized",
      "Cross-functional alignment improved",
    ],
    image:
      "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwNTQ0MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    title: "THE VALUEVERSE",
    category: "STRATEGIC DESIGN · EXECUTIVE COMMUNICATIONS",
    description:
      "Designed a comprehensive presentation system showcasing brand demographics across a multi-billion dollar portfolio — delivered directly to C-suite leadership at a Fortune 10 corporation.",
    results: [
      "C-suite presentation delivered",
      "Multi-billion dollar portfolio visualized",
      "Brand demographic analysis framework",
    ],
    image:
      "https://images.unsplash.com/photo-1687125114692-54f19a0fd438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmQlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDU0NDEwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    title: "DISASTER RELIEF OPERATIONS",
    category: "OPERATIONAL DESIGN · PROGRAM MANAGEMENT",
    description:
      "Operationalized disaster relief offer frameworks, Capex prioritization models, and cross-functional program governance from scratch for a national telecommunications carrier.",
    results: [
      "Full SOP documentation",
      "Capex prioritization model built",
      "Program governance from scratch",
    ],
    image:
      "https://images.unsplash.com/photo-1761792654327-b32d0be2a96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwZGVza3RvcCUyMGRhcmt8ZW58MXx8fHwxNzcwNTQ0MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

export function CaseStudiesPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageLayout>
      <Helmet>
        <title>Case Studies | Xceptional Design Lab, LLC</title>
        <meta
          name="description"
          content="Selected work across brand identity, digital platforms, operational design, and strategic consulting — featuring 16+ years of enterprise experience."
        />
        <meta property="og:title" content="Case Studies | Xceptional Design Lab, LLC" />
        <meta property="og:description" content="Results speak louder than promises. Selected work from 16+ years of enterprise experience." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Xceptional Design Lab, LLC" />
        <meta name="twitter:description" content="Results speak louder than promises." />
        <meta name="twitter:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
      </Helmet>
      <div className="min-h-screen pt-32">
        <section className="relative py-32 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <div className="mb-8">
                <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
                  SELECTED WORK
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-12">
                RESULTS SPEAK LOUDER THAN{" "}
                <span className="text-gold-gradient text-glow">
                  PROMISES.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="floating-card rounded-3xl p-10 md:p-16 max-w-5xl mb-20">
                <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed mb-4">
                  A curated selection of engagements across brand identity,
                  digital platforms, operational design, and strategic
                  consulting. Due to NDA agreements, some client names have been
                  anonymized.
                </p>
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  16+ years of enterprise experience. Every project shown here
                  was delivered with full documentation, team training, and
                  operational handoff.
                </p>
              </div>
            </AnimatedSection>

            {/* Featured Projects */}
            <div className="mb-16">
              <AnimatedSection>
                <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium mb-8">
                  FEATURED ENGAGEMENTS
                </p>
              </AnimatedSection>

              <StaggerContainer
                className="grid lg:grid-cols-2 gap-8"
                staggerDelay={0.15}
              >
                {featuredProjects.map((project, idx) => (
                  <StaggerItem key={idx}>
                    <div className="floating-card rounded-3xl overflow-hidden group h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{
                            filter:
                              "grayscale(60%) contrast(1.1) brightness(0.8)",
                          }}
                        />
                        {/* Gold overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="glass rounded-full px-4 py-1.5 text-[#D4AF37] text-[10px] tracking-[0.15em] uppercase font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-3 group-hover:text-[#D4AF37] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#A0A0A0] leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>

                        {/* Results */}
                        <div className="pt-4 border-t border-[#D4AF37]/20">
                          <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-3">
                            KEY OUTCOMES
                          </p>
                          <div className="space-y-2">
                            {project.results.map((result, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                                <span className="text-sm text-[#F5E6B8]">
                                  {result}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Other Projects */}
            <div className="mb-20">
              <AnimatedSection>
                <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium mb-8">
                  ADDITIONAL ENGAGEMENTS
                </p>
              </AnimatedSection>

              <StaggerContainer
                className="grid md:grid-cols-2 gap-6"
                staggerDelay={0.12}
              >
                {otherProjects.map((project, idx) => (
                  <StaggerItem key={idx}>
                    <div className="floating-card rounded-2xl p-6 md:p-8 group h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border-glow-strong">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            style={{
                              filter:
                                "grayscale(70%) contrast(1.1) brightness(0.7)",
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#FAFAFA] mb-1 group-hover:text-[#D4AF37] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[#D4AF37] text-[10px] tracking-[0.15em] uppercase">
                            {project.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#A0A0A0] leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="space-y-1.5">
                        {project.results.map((result, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-center gap-2"
                          >
                            <span className="text-[#D4AF37] text-xs">✓</span>
                            <span className="text-xs text-[#F5E6B8]">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* CTA */}
            <AnimatedSection>
              <div className="text-center">
                <div className="floating-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-[#D4AF37]/30">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                    LET'S BUILD SOMETHING{" "}
                    <span className="text-gold-gradient">EXCEPTIONAL.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed mb-8">
                    Every project starts with a conversation. Tell us what
                    you're building.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block floating-card rounded-full px-12 py-4 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group"
                  >
                    <span>START A PROJECT</span>
                    <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform text-black">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}