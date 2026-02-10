import { Helmet } from "react-helmet-async";
import { PageLayout } from "../components/PageLayout";
import { ServicesCartButton } from "../components/ServicesCartButton";
import { Link } from "react-router";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

export function ServicesPage() {
  const serviceCategories = [
    {
      title: "BRAND & IDENTITY",
      slug: "brand-identity",
      description:
        "Strategic positioning, visual identity, and brand architecture.",
      serviceCount: 10,
      highlights: [
        "Brand Strategy",
        "Visual Identity",
        "Logo Design",
        "Brand Guidelines",
      ],
    },
    {
      title: "DIGITAL PLATFORMS",
      slug: "digital-platforms",
      description:
        "Websites, applications, and digital experiences built to scale.",
      serviceCount: 10,
      highlights: [
        "Custom Websites",
        "E-Commerce",
        "Web Applications",
        "CMS Integration",
      ],
    },
    {
      title: "OPERATIONAL DESIGN",
      slug: "operational-design",
      description:
        "Systems, workflows, and infrastructure that keep businesses running.",
      serviceCount: 10,
      highlights: [
        "Process Mapping",
        "SOPs",
        "Workflow Automation",
        "Project Management",
      ],
    },
    {
      title: "TECHNICAL SERVICES",
      slug: "technical-services",
      description:
        "Infrastructure, integrations, and technical implementation.",
      serviceCount: 10,
      highlights: [
        "Domain & Hosting",
        "Email Systems",
        "CRM Implementation",
        "Analytics",
      ],
    },
    {
      title: "COMMUNICATIONS",
      slug: "communications",
      description:
        "Content, campaigns, and customer engagement strategies.",
      serviceCount: 10,
      highlights: [
        "Content Strategy",
        "Copywriting",
        "Email Marketing",
        "Social Media",
      ],
    },
    {
      title: "STRATEGIC CONSULTING",
      slug: "strategic-consulting",
      description:
        "High-level advisory for growth, governance, and transformation.",
      serviceCount: 10,
      highlights: [
        "Business Model Design",
        "Go-To-Market",
        "Digital Transformation",
        "Executive Advisory",
      ],
    },
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Services | Xceptional Design Lab, LLC</title>
        <meta
          name="description"
          content="61 strategic design and digital services across 6 core disciplines — Brand & Identity, Digital Platforms, Operational Design, Technical Services, Communications, and Strategic Consulting."
        />
        <meta property="og:title" content="Services | Xceptional Design Lab, LLC" />
        <meta property="og:description" content="61 services. Zero compromises. Full-service strategic design and digital infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Xceptional Design Lab, LLC" />
        <meta name="twitter:description" content="61 services. Zero compromises." />
        <meta name="twitter:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
      </Helmet>
      <div className="min-h-screen pt-32">
        <section className="relative py-32 px-6 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <div className="mb-8">
                <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
                  FULL SERVICE CATALOG
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-12">
                61 SERVICES.{" "}
                <span className="text-gold-gradient text-glow">
                  ZERO COMPROMISES.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="floating-card rounded-3xl p-8 md:p-16 max-w-5xl mb-20">
                <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed mb-6">
                  Every service category below represents a core
                  capability — backed by 16+ years of enterprise experience and
                   three professional certifications. Click any category to
                  explore the full range of services we offer within that
                  discipline.
                </p>
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  Services can be engaged individually, combined into custom
                  packages, or selected for inclusion in your consultation
                  request. We don't do cookie-cutter. Every engagement is
                  scoped to your specific needs.
                </p>
              </div>
            </AnimatedSection>

            {/* Service Category Cards */}
            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {serviceCategories.map((category, idx) => (
                <StaggerItem key={idx}>
                  <Link
                    to={`/services/${category.slug}`}
                    className="floating-card rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group block h-full"
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-3 group-hover:text-[#F5E6B8] transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-lg text-[#A0A0A0] leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <p className="text-sm text-[#D4AF37] font-medium">
                        {category.serviceCount} Services Available
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {category.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2"
                        >
                          <span className="text-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity">
                            •
                          </span>
                          <span className="text-sm text-[#F5E6B8]">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#D4AF37] font-medium group-hover:gap-4 transition-all">
                      <span>EXPLORE SERVICES</span>
                      <span className="group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA Section */}
            <AnimatedSection delay={0.3} className="mt-20 text-center">
              <div className="floating-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                  READY TO GET STARTED?
                </h2>
                <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed mb-8">
                  Book a free 30-minute strategy call to discuss which services
                  fit your needs — or explore our pre-built packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-block floating-card rounded-full px-12 py-4 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group"
                  >
                    <span>BOOK A CALL</span>
                    <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform text-black">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/services/brand-identity"
                    className="inline-block floating-card rounded-full px-12 py-4 text-[#D4AF37] text-lg font-medium tracking-wide border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  >
                    VIEW PACKAGES
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <ServicesCartButton />
    </PageLayout>
  );
}