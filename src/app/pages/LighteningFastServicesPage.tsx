import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { PageLayout } from "../components/PageLayout";
import { ServicesCartButton } from "../components/ServicesCartButton";
import { useServicesCart } from "../context/ServicesCartContext";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

interface RapidService {
  slug: string;
  name: string;
  turnaround: string;
  description: string;
  deliverables: string;
}

const rapidServices: RapidService[] = [
  {
    slug: "picture-edits",
    name: "Picture Edits",
    turnaround: "24-48 Hours",
    description:
      "Professional retouching, color correction, background cleanup, and publication-ready formatting for personal or brand assets.",
    deliverables: "Optimized exports for web, social, and print.",
  },
  {
    slug: "headshot-refresh",
    name: "Headshot Refresh",
    turnaround: "24-72 Hours",
    description:
      "Executive-level headshot enhancement with skin balancing, lighting correction, crop variants, and profile-ready outputs.",
    deliverables: "LinkedIn, website, and press kit versions.",
  },
  {
    slug: "resume-generation",
    name: "Resume Generation",
    turnaround: "48-72 Hours",
    description:
      "Modern, ATS-conscious resume writing and layout design for leadership, corporate, and creative roles.",
    deliverables: "Editable and print-ready resume package.",
  },
  {
    slug: "flyer-design",
    name: "Flyers & One-Sheets",
    turnaround: "24-72 Hours",
    description:
      "High-impact flyers, event one-sheets, and promotional collateral built for conversion and clear message hierarchy.",
    deliverables: "Digital and print production files.",
  },
  {
    slug: "marketing-concepts",
    name: "Marketing Concepts",
    turnaround: "48-96 Hours",
    description:
      "Campaign concepting with headlines, creative direction, mood references, and launch-ready content directions.",
    deliverables: "Concept board + messaging starter kit.",
  },
  {
    slug: "social-graphic-bundles",
    name: "Social Graphic Bundles",
    turnaround: "24-72 Hours",
    description:
      "Branded social graphics for announcements, launches, and recurring content moments across core platforms.",
    deliverables: "Multi-size templates and exports.",
  },
];

export function LighteningFastServicesPage() {
  const { addService, removeService, isServiceSelected } = useServicesCart();

  const handleToggleService = (service: RapidService) => {
    const serviceId = `lightening-${service.slug}`;

    if (isServiceSelected(serviceId)) {
      removeService(serviceId);
    } else {
      addService({
        id: serviceId,
        name: service.name,
        category: "LIGHTENING FAST SERVICES",
      });
    }
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Lightening Fast Services | Xceptional Design Lab</title>
        <meta
          name="description"
          content="A la carte, quick-turn creative and marketing services including picture edits, headshot refresh, resume generation, flyers, and concept development."
        />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <section className="relative py-16 px-6 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <div className="mb-8">
                <Link
                  to="/services"
                  className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-medium hover:text-[#F5E6B8] transition-colors inline-flex items-center gap-2"
                >
                  <span>←</span> BACK TO SERVICES
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mb-14">
                <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-6">
                  A LA CARTE MENU
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-6">
                  LIGHTENING FAST SERVICES.
                </h1>
                <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-4xl">
                  Quick-turn, high-standard deliverables for teams and leaders
                  who need quality work now. Select what you need, add it to
                  your consultation request, and we will scope your timeline.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              staggerDelay={0.06}
            >
              {rapidServices.map((service, idx) => {
                const serviceId = `lightening-${service.slug}`;
                const isSelected = isServiceSelected(serviceId);

                return (
                  <StaggerItem key={service.slug}>
                    <div className="floating-card rounded-xl p-6 md:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group h-full flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="text-[#D4AF37] text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] tracking-[0.18em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 rounded-full px-3 py-1">
                          {service.turnaround}
                        </span>
                      </div>

                      <h3 className="text-[#F5E6B8] font-medium text-2xl leading-tight mb-4">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#A0A0A0] leading-relaxed mb-5 flex-1">
                        {service.description}
                      </p>

                      <p className="text-xs tracking-[0.12em] uppercase text-[#D4AF37] mb-5">
                        {service.deliverables}
                      </p>

                      <button
                        onClick={() => handleToggleService(service)}
                        className={`text-sm font-medium tracking-wide px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "bg-transparent text-[#D4AF37] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                        }`}
                      >
                        {isSelected
                          ? "✓ ADDED TO CONSULTATION"
                          : "+ ADD TO CONSULTATION"}
                      </button>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <AnimatedSection delay={0.3} className="mt-20 text-center">
              <div className="floating-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-[#D4AF37]/20">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                  NEED IT FAST AND DONE RIGHT?
                </h2>
                <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed mb-8">
                  Submit your a la carte selections and we will confirm scope,
                  turnaround, and next steps in your consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-block floating-card rounded-full px-12 py-4 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300"
                  >
                    REQUEST NOW
                  </Link>
                  <Link
                    to="/services"
                    className="inline-block floating-card rounded-full px-12 py-4 text-[#D4AF37] text-lg font-medium tracking-wide border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  >
                    VIEW FULL CATALOG
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
