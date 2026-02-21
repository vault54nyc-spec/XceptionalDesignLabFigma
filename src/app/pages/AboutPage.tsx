import { Helmet } from "react-helmet-async";
import { PageLayout } from "../components/PageLayout";
import { Link } from "react-router";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

export function AboutPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>About | Xceptional Design Lab, LLC</title>
        <meta name="description" content="Meet Christopher DeMarkus — Chief of Staff, Portfolio Management, Senior Level Auditor with 16+ years at the intersection of enterprise operations, creative direction, and digital technology." />
        <meta property="og:title" content="About | Xceptional Design Lab, LLC" />
        <meta property="og:description" content="Corporate-trained. Creatively wired. Relentlessly thorough." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Xceptional Design Lab, LLC" />
        <meta name="twitter:description" content="Corporate-trained. Creatively wired. Relentlessly thorough." />
        <meta name="twitter:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
      </Helmet>
      <div className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <div className="mb-8">
                <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium text-[11px]">
                  THE PERSON BEHIND THE PRACTICE
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-12">
                CORPORATE-TRAINED.{" "}
                <span className="text-gold-gradient text-glow">
                  CREATIVELY WIRED.
                </span>{" "}
                RELENTLESSLY THOROUGH.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="floating-card rounded-3xl p-6 md:p-10 max-w-5xl space-y-6">
                <p className="md:text-2xl text-[#A0A0A0] leading-relaxed text-[16px]">
                  Xceptional Design Lab was founded by Christopher DeMarkus
                  — Chief of Staff, Portfolio Management, Senior Level Auditor with <strong className="text-[#F5E6B8]">16+ years</strong> operating at the intersection of
                  enterprise operations, creative direction, and digital
                  technology.
                </p>
                <p className="md:text-2xl text-[#A0A0A0] leading-relaxed text-[16px]">
                  XDL is an independent creative and operational
                  consultancy specializing in brand architecture, digital
                   infrastructure, and operational design for founders, executives,
                   and growth-stage companies who refuse to look ordinary.
                </p>
                <p className="md:text-2xl text-[#A0A0A0] leading-relaxed text-[16px]">
                  Before founding XDL, Christopher served as Associate Director
                  of Portfolio & Program Management at Verizon Communications —
                  supporting SVP-level executives within the Value Brands
                  division, managing governance frameworks, Capex prioritization
                  models, and cross-functional program delivery across a
                  multi-billion dollar portfolio.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The XDL Difference */}
        <section className="relative py-24 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-6">
                WHY{" "}
                <span className="text-gold-gradient text-glow">XDL?</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-4xl mb-16">
                Because most partners can make it look good. We make it
                work. The difference is 16 years of building systems that
                survive contact with reality.
              </p>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <div className="text-3xl font-bold text-gold-gradient mb-3">01</div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                    ENTERPRISE RIGOR
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    We bring Fortune 10 governance, documentation standards, and
                    program management discipline to every engagement — whether
                    it's a startup brand or a corporate rebrand.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <div className="text-3xl font-bold text-gold-gradient mb-3">02</div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                    FULL-STACK DELIVERY
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    Strategy, design, development, automation, documentation, and
                    training — all under one roof. No handoffs to third parties.
                    No excuses. No gaps.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <div className="text-3xl font-bold text-gold-gradient mb-3">03</div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                    SELF-SUFFICIENCY GUARANTEE
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    Every engagement ends with your team fully trained on what we
                    built. We don't create dependency. We create capability and
                    hand over the keys.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="relative py-24 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            {/* Credential Logos - 2 rows of 4 */}
            <AnimatedSection>
              <div className="mb-16 space-y-8">
                {/* Row 1: UH, TWU, CFE, PMP */}
                <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/uh.svg"
                    alt="University of Houston"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/twu.svg"
                    alt="Texas Woman's University"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/cfe.svg"
                    alt="Certified Fraud Examiner"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/2.svg"
                    alt="PMP Certification"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Row 2: V, CCOS, APA, NPHC */}
                <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/8.svg"
                    alt="Verizon"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/pmp.svg"
                    alt="PMP Certification"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/apa.svg"
                    alt="Alpha Phi Alpha Fraternity, Inc."
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/nphc.svg"
                    alt="NPHC"
                    className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.1}
            >
              {/* Certifications */}
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-6">
                    CERTIFICATIONS
                  </h3>
                  <div className="space-y-3 text-[#A0A0A0]">
                    <p>PMP® — Project Management Professional</p>
                    <p>CCOS — Certified Customer Operations Specialist</p>
                    <p>CFE — Certified Fraud Examiner</p>
                  </div>
                </div>
              </StaggerItem>

              {/* Enterprise Experience */}
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-6">
                    ENTERPRISE EXPERIENCE
                  </h3>
                  <div className="space-y-3 text-[#A0A0A0]">
                    <p className="text-[#F5E6B8] font-medium">
                      Chief of Staff, Growth Revenue Organization
                    </p>
                    <p>Verizon Communications</p>
                    <p>Commercial Growth & Brand Portfolio</p>
                    <p className="text-[#D4AF37] text-sm font-medium pt-2">
                      16+ years combined experience
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Ventures */}
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-6">
                    VENTURES
                  </h3>
                  <div className="space-y-3 text-[#A0A0A0]">
                    <p>
                      Xceptional Design Lab — Brand Strategy & Executive Operations
                    </p>
                    <p>VAULT54NYC — Exclusive Membership Platform</p>
                    <p>Debonair Demographics — Market Intelligence</p>
                    <p>Urbane Elite Holdings — Portfolio Entity</p>
                  </div>
                </div>
              </StaggerItem>

              {/* Core Competencies */}
              <StaggerItem>
                <div className="floating-card rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-6">
                    CORE COMPETENCIES
                  </h3>
                  <div className="space-y-3 text-[#A0A0A0]">
                    <p>Brand Architecture & Visual Systems</p>
                    <p>Digital Platform Development</p>
                    <p>Operational Process Design</p>
                    <p>Program Governance & PMO</p>
                    <p>AI & Automation Integration</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Philosophy — Three Rules */}
        <section className="relative py-32 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-16">
                THREE RULES.{" "}
                <span className="text-gold-gradient text-glow">
                  NO EXCEPTIONS.
                </span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-12" staggerDelay={0.15}>
              <StaggerItem>
                <div className="floating-card rounded-2xl p-6 md:p-8">
                  <h3 className="text-3xl font-bold text-[#D4AF37] mb-4">
                    STRATEGY BEFORE PIXELS.
                  </h3>
                  <p className="text-xl text-[#A0A0A0] leading-relaxed">
                    We don't open Figma until we understand your business model,
                    your audience, and your competitive landscape. Design without
                    strategy is decoration. Strategy without execution is just a
                    deck. We do both.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="floating-card rounded-2xl p-6 md:p-8">
                  <h3 className="text-3xl font-bold text-[#D4AF37] mb-4">
                    BUILD THE WHOLE MACHINE.
                  </h3>
                  <p className="text-xl text-[#A0A0A0] leading-relaxed">
                    A brand is not a logo. It's the identity, the website, the
                    email system, the automation, the documentation, and the
                    training that makes it all run without you in the room.
                    We build the entire operational engine — not just the
                    paint job.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="floating-card rounded-2xl p-6 md:p-8">
                  <h3 className="text-3xl font-bold text-[#D4AF37] mb-4">
                    LEAVE IT BETTER THAN WE FOUND IT.
                  </h3>
                  <p className="text-xl text-[#A0A0A0] leading-relaxed">
                    Every engagement ends with your team knowing how to operate
                    what we built. We don't create dependency. We create
                    capability. Full documentation. Full training. Full
                    ownership transfer.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <AnimatedSection>
              <div className="floating-card rounded-3xl p-8 md:p-12 border-2 border-[#D4AF37]/30">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-6">
                  READY TO WORK WITH{" "}
                  <span className="text-gold-gradient text-glow">
                    SOMEONE WHO GETS IT?
                  </span>
                </h2>
                <p className="text-xl text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto mb-10">
                  16 years of building systems that work. Three certifications
                  that prove it. One conversation to see if we're the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="floating-card rounded-full px-12 py-5 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group"
                  >
                    <span>BOOK A CALL</span>
                    <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="floating-card rounded-full px-12 py-5 text-[#D4AF37] text-lg font-medium tracking-wide border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  >
                    VIEW SERVICE CATALOG
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