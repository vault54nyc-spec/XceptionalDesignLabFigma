import { useParams, Link } from "react-router";
import { PageLayout } from "../components/PageLayout";
import { ServicesCartButton } from "../components/ServicesCartButton";
import { useServicesCart } from "../context/ServicesCartContext";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimatedSection";

interface Service {
  name: string;
  desc: string;
}

interface CategoryData {
  title: string;
  description: string;
  services: Service[];
}

const categoryData: Record<string, CategoryData> = {
  "brand-identity": {
    title: "BRAND & IDENTITY",
    description:
      "Strategic positioning, visual identity, and brand architecture.",
    services: [
      {
        name: "Brand Strategy & Positioning",
        desc: "Competitive analysis, market positioning, brand essence definition, and strategic narrative development.",
      },
      {
        name: "Brand Identity Design",
        desc: "Complete visual identity systems including logo design, color palettes, typography, and brand elements.",
      },
      {
        name: "Logo Design & Trademark Research",
        desc: "Custom logo creation with comprehensive trademark clearance and intellectual property research.",
      },
      {
        name: "Brand Guidelines & Standards Manual",
        desc: "Comprehensive brand usage documentation ensuring consistency across all applications and touchpoints.",
      },
      {
        name: "Brand Architecture & Portfolio Strategy",
        desc: "Organizational brand structure, sub-brand relationships, and portfolio hierarchy design.",
      },
      {
        name: "Naming & Tagline Development",
        desc: "Strategic naming systems, brand nomenclature, and positioning tagline creation.",
      },
      {
        name: "Brand Voice & Messaging Framework",
        desc: "Tone of voice guidelines, messaging pillars, and communication standards documentation.",
      },
      {
        name: "Visual Identity Systems",
        desc: "Extended visual language including patterns, iconography, photography style, and design systems.",
      },
      {
        name: "Typography & Color Systems",
        desc: "Custom typeface selection or development, and strategic color system architecture.",
      },
      {
        name: "Brand Refresh & Evolution",
        desc: "Modernization of existing brands while maintaining equity and recognition in the market.",
      },
    ],
  },
  "digital-platforms": {
    title: "DIGITAL PLATFORMS",
    description:
      "Websites, applications, and digital experiences built to scale.",
    services: [
      {
        name: "Custom Website Design & Development",
        desc: "Fully custom, high-performance websites built with modern frameworks and optimized infrastructure.",
      },
      {
        name: "E-Commerce Platform Development",
        desc: "Full-featured online stores with payment integration, inventory management, and order fulfillment systems.",
      },
      {
        name: "Web Application Development",
        desc: "Custom web-based software platforms, dashboards, and interactive tools tailored to business needs.",
      },
      {
        name: "Landing Page Design & Optimization",
        desc: "High-conversion landing pages with A/B testing infrastructure and performance tracking.",
      },
      {
        name: "Membership & Subscription Platforms",
        desc: "Gated content systems, recurring billing integration, and member management infrastructure.",
      },
      {
        name: "Content Management System (CMS) Integration",
        desc: "Implementation and customization of WordPress, Webflow, or headless CMS solutions.",
      },
      {
        name: "Mobile-Responsive Design",
        desc: "Cross-device optimization ensuring perfect rendering on all screen sizes and devices.",
      },
      {
        name: "Progressive Web Apps (PWA)",
        desc: "Offline-capable web applications with native app features and installable experiences.",
      },
      {
        name: "API Development & Integration",
        desc: "Custom API development and third-party service integration for connected systems.",
      },
      {
        name: "Database Architecture & Management",
        desc: "Scalable database design, migration services, and ongoing database optimization.",
      },
    ],
  },
  "operational-design": {
    title: "OPERATIONAL DESIGN",
    description:
      "Systems, workflows, and infrastructure that keep businesses running.",
    services: [
      {
        name: "Business Process Mapping & Optimization",
        desc: "Current-state analysis, workflow documentation, and efficiency improvement recommendations.",
      },
      {
        name: "Standard Operating Procedures (SOPs)",
        desc: "Comprehensive operational documentation ensuring consistency, quality, and scalability.",
      },
      {
        name: "Workflow Automation Design",
        desc: "Process automation using Zapier, Make.com, or custom solutions to reduce manual work.",
      },
      {
        name: "Project Management System Setup",
        desc: "Implementation and configuration of PM tools like Asana, Monday.com, or ClickUp.",
      },
      {
        name: "Team Collaboration Infrastructure",
        desc: "Setup and integration of communication platforms, file sharing, and knowledge bases.",
      },
      {
        name: "Documentation & Knowledge Management",
        desc: "Internal wiki creation, documentation systems, and institutional knowledge capture.",
      },
      {
        name: "Onboarding & Training Program Design",
        desc: "New hire onboarding workflows, training materials, and certification program development.",
      },
      {
        name: "Quality Assurance Framework Development",
        desc: "QA processes, testing protocols, and quality control documentation.",
      },
      {
        name: "Risk Management & Compliance Documentation",
        desc: "Risk assessment frameworks, compliance tracking, and regulatory documentation.",
      },
      {
        name: "Operational Dashboard Design",
        desc: "Custom dashboards for KPI tracking, performance monitoring, and executive reporting.",
      },
    ],
  },
  "technical-services": {
    title: "TECHNICAL SERVICES",
    description:
      "Infrastructure, integrations, and technical implementation — including AI transformation.",
    services: [
      {
        name: "Domain & Hosting Setup",
        desc: "Domain registration, DNS configuration, hosting selection, and server provisioning.",
      },
      {
        name: "Email System Configuration",
        desc: "Professional email setup with Google Workspace or Microsoft 365 including security and deliverability.",
      },
      {
        name: "CRM Implementation & Customization",
        desc: "Customer relationship management system setup with HubSpot, Salesforce, or custom CRM platforms.",
      },
      {
        name: "Marketing Automation Platform Setup",
        desc: "Email marketing, lead nurturing, and campaign automation using Mailchimp, ActiveCampaign, or similar.",
      },
      {
        name: "Analytics & Tracking Implementation",
        desc: "Google Analytics 4, conversion tracking, event tracking, and custom reporting dashboards.",
      },
      {
        name: "Security & SSL Certificate Management",
        desc: "HTTPS implementation, SSL certificate installation, and ongoing security monitoring.",
      },
      {
        name: "Cloud Infrastructure Setup",
        desc: "AWS, Azure, or Google Cloud configuration for scalable, secure application hosting.",
      },
      {
        name: "Third-Party API Integration",
        desc: "Connection to payment processors, shipping APIs, social platforms, and business tools.",
      },
      {
        name: "Performance Optimization & Speed Testing",
        desc: "Site speed audits, Core Web Vitals optimization, and performance monitoring setup.",
      },
      {
        name: "Technical SEO & Site Structure",
        desc: "Search engine optimization, XML sitemaps, schema markup, and crawlability improvements.",
      },
      {
        name: "AI Workflow Automation & Integration",
        desc: "Custom AI-powered automation using ChatGPT, Claude, or custom LLMs integrated into your existing business workflows.",
      },
    ],
  },
  communications: {
    title: "COMMUNICATIONS",
    description:
      "Content, campaigns, and customer engagement strategies.",
    services: [
      {
        name: "Content Strategy Development",
        desc: "Editorial calendars, content pillars, distribution strategies, and audience development plans.",
      },
      {
        name: "Copywriting & Editorial Services",
        desc: "Website copy, marketing materials, thought leadership content, and brand storytelling.",
      },
      {
        name: "Email Marketing Campaign Design",
        desc: "Email template design, campaign strategy, segmentation, and performance optimization.",
      },
      {
        name: "Newsletter Design & Template Development",
        desc: "Custom newsletter templates with modular layouts and brand-aligned design systems.",
      },
      {
        name: "Social Media Content Strategy",
        desc: "Platform-specific strategies, content calendars, and performance measurement frameworks.",
      },
      {
        name: "Presentation & Pitch Deck Design",
        desc: "Executive presentations, investor decks, and sales presentations with compelling visual narratives.",
      },
      {
        name: "Marketing Collateral Design",
        desc: "Brochures, one-pagers, case studies, and sales materials for print and digital use.",
      },
      {
        name: "Sales Enablement Materials",
        desc: "Battle cards, product sheets, proposal templates, and competitive positioning documents.",
      },
      {
        name: "Internal Communications Design",
        desc: "Employee newsletters, all-hands presentations, and internal brand materials.",
      },
      {
        name: "Customer Journey Mapping",
        desc: "Touchpoint analysis, experience mapping, and communication sequence design.",
      },
    ],
  },
  "strategic-consulting": {
    title: "STRATEGIC CONSULTING",
    description:
      "High-level advisory for growth, governance, and transformation.",
    services: [
      {
        name: "Business Model Design & Validation",
        desc: "Revenue model development, value proposition testing, and business model canvas workshops.",
      },
      {
        name: "Go-To-Market Strategy",
        desc: "Market entry planning, launch strategy, channel selection, and competitive positioning.",
      },
      {
        name: "Digital Transformation Consulting",
        desc: "Technology adoption roadmaps, process digitization, and organizational change management.",
      },
      {
        name: "Product-Market Fit Analysis",
        desc: "Customer research, market validation, and product positioning optimization.",
      },
      {
        name: "Competitive Intelligence & Market Research",
        desc: "Competitor analysis, market trend identification, and strategic opportunity assessment.",
      },
      {
        name: "Executive Advisory & Fractional Leadership",
        desc: "Part-time C-suite support, strategic planning, and executive-level project oversight.",
      },
      {
        name: "Investor Readiness & Pitch Preparation",
        desc: "Pitch deck development, financial modeling support, and investor presentation coaching.",
      },
      {
        name: "Portfolio & Program Management",
        desc: "Enterprise-level program governance, portfolio optimization, and PMO establishment.",
      },
      {
        name: "Change Management Strategy",
        desc: "Organizational change planning, stakeholder engagement, and transformation roadmaps.",
      },
      {
        name: "Innovation Workshops & Design Sprints",
        desc: "Facilitated ideation sessions, rapid prototyping, and solution development workshops.",
      },
    ],
  },
};

export function ServiceCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? categoryData[categorySlug] : null;
  const { addService, removeService, isServiceSelected } = useServicesCart();

  if (!category) {
    return (
      <PageLayout>
        <div className="min-h-screen pt-32 px-8 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#FAFAFA] mb-4">Category not found</h1>
          <Link
            to="/services"
            className="text-[#D4AF37] underline mt-4 inline-block"
          >
            Back to Services
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handleToggleService = (serviceName: string, idx: number) => {
    const serviceId = `${categorySlug}-${idx}`;

    if (isServiceSelected(serviceId)) {
      removeService(serviceId);
    } else {
      addService({
        id: serviceId,
        name: serviceName,
        category: category.title,
      });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-20">
        <section className="relative py-16 px-6 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            {/* Breadcrumb */}
            <AnimatedSection>
              <div className="mb-8">
                <Link
                  to="/services"
                  className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-medium hover:text-[#F5E6B8] transition-colors inline-flex items-center gap-2"
                >
                  <span>←</span> BACK TO ALL SERVICES
                </Link>
              </div>
            </AnimatedSection>

            {/* Category Header */}
            <AnimatedSection delay={0.1}>
              <div className="mb-16">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-6">
                  {category.title}
                </h1>
                <p className="text-xl md:text-2xl text-[#D0D0D0] leading-relaxed max-w-3xl">
                  {category.description}
                </p>
              </div>
            </AnimatedSection>

            {/* Service Cards */}
            <StaggerContainer
              className="grid md:grid-cols-2 gap-4 md:gap-6"
              staggerDelay={0.06}
            >
              {category.services.map((service, idx) => {
                const serviceId = `${categorySlug}-${idx}`;
                const isSelected = isServiceSelected(serviceId);

                return (
                  <StaggerItem key={idx}>
                    <div className="floating-card rounded-xl p-6 md:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-[#D4AF37] text-sm font-bold mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[#F5E6B8] font-medium text-lg leading-relaxed flex-1">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[#D0D0D0] leading-relaxed pl-8 mb-4 flex-1">
                        {service.desc}
                      </p>
                      <div className="pl-8">
                        <button
                          onClick={() =>
                            handleToggleService(service.name, idx)
                          }
                          className={`text-sm font-medium tracking-wide px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                            isSelected
                              ? "bg-[#D4AF37] text-[#FAFAFA] border-[#D4AF37]"
                              : "bg-transparent text-[#D4AF37] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                          }`}
                        >
                          {isSelected
                            ? "✓ ADDED TO CONSULTATION"
                            : "+ ADD TO CONSULTATION"}
                        </button>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* CTA Section */}
            <AnimatedSection delay={0.3} className="mt-20 text-center">
              <div className="floating-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                  NEED THIS EXPERTISE?
                </h2>
                <p className="text-lg md:text-xl text-[#D0D0D0] leading-relaxed mb-8">
                  Book a free 30-minute strategy call to discuss how these
                  services can be tailored to your needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block floating-card rounded-full px-12 py-4 bg-[#D4AF37] text-[#FAFAFA] text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group"
                >
                  <span>BOOK A CALL</span>
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform text-[#FAFAFA]">
                    →
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <ServicesCartButton />
    </PageLayout>
  );
}