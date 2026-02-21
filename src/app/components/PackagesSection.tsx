import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-7d38c017`;

// ============================================
// DISCOUNT PROGRAMS
// ============================================
const DISCOUNT_OPTIONS = [
  { id: "", label: "No discount", percent: 0 },
  {
    id: "alpha-phi-alpha",
    label: "Alpha Phi Alpha Fraternity, Inc.",
    percent: 10,
  },
  { id: "community-partner", label: "Community Leadership Partner", percent: 10 },
  {
    id: "referral",
    label: "Referral Redemption",
    percent: 15,
  },
  { id: "legacy", label: "Legacy Client", percent: 20 },
];

// ============================================
// PACKAGE TIERS
// ============================================
const packages = [
  {
    id: "brand-foundation",
    name: "BRAND FOUNDATION",
    price: "$3K – $8K",
    basePrice: 3000,
    priceNote: "Varies by scope",
    description:
      "For startups and founders who need a professional brand identity built right from the start. Scope and pricing are tailored after a discovery call.",
    includes: [
      "Brand Strategy & Positioning",
      "Logo Design + Brand Mark",
      "Color & Typography System",
      "Brand Guidelines Document",
      "Business Card & Letterhead Design",
      "Social Media Profile Kit",
    ],
    popular: false,
    timeline: "3–4 weeks",
  },
  {
    id: "digital-presence",
    name: "DIGITAL PRESENCE",
    price: "$8K – $18K",
    basePrice: 8000,
    priceNote: "Varies by scope",
    description:
      "Complete brand identity + custom website. The essentials for establishing a serious digital presence. Final pricing depends on page count, integrations, and complexity.",
    includes: [
      "Everything in Brand Foundation",
      "Custom Website (up to 8 pages)",
      "Mobile-Responsive Design",
      "CMS Integration (WordPress/Webflow)",
      "SEO Foundation Setup",
      "Analytics & Tracking",
      "Domain & Hosting Configuration",
      "30-Day Post-Launch Support",
    ],
    popular: true,
    timeline: "6–8 weeks",
  },
  {
    id: "full-infrastructure",
    name: "FULL INFRASTRUCTURE",
    price: "$18K – $40K+",
    basePrice: 18000,
    priceNote: "Varies by scope",
    description:
      "The complete operational buildout. Brand, website, automation, CRM, email systems, documentation, and training. Every engagement is scoped individually — we recommend starting with a consultation.",
    includes: [
      "Everything in Digital Presence",
      "CRM Setup & Customization",
      "Email Marketing System",
      "Workflow Automation (5+ flows)",
      "Standard Operating Procedures",
      "Team Training & Documentation",
      "90-Day Post-Launch Support",
      "Quarterly Strategy Check-In",
    ],
    popular: false,
    timeline: "8–12 weeks",
  },
];

function PackageCard({
  pkg,
}: {
  pkg: (typeof packages)[number];
}) {
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const discount = DISCOUNT_OPTIONS.find((d) => d.id === selectedDiscount);
  const discountPercent = discount?.percent ?? 0;
  const discountedBase = Math.round(pkg.basePrice * (1 - discountPercent / 100));

  const selectClasses =
    "w-full glass rounded-lg px-3 py-2.5 text-sm text-[#FAFAFA] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none transition-colors bg-[#0A0A0A] appearance-none cursor-pointer";

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          packageId: pkg.id,
          discountCode: selectedDiscount || undefined,
          originUrl: window.location.origin,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Stripe checkout error:", result);
        toast.error(result.error || "Failed to create checkout session.", {
          style: {
            background: "#0A0A0A",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#FAFAFA",
          },
        });
        return;
      }

      // Redirect to Stripe Checkout
      if (result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: "#0A0A0A",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#FAFAFA",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`floating-card rounded-2xl p-6 md:p-8 h-full flex flex-col relative ${
        pkg.popular
          ? "border-2 border-[#D4AF37]/60 shadow-[0_0_60px_rgba(212,175,55,0.2)]"
          : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#D4AF37] text-[#FAFAFA] text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{pkg.name}</h3>
        <p className="text-3xl font-bold text-[#FAFAFA] mb-1">{pkg.price}</p>
        <p className="text-xs text-[#D4AF37]/70 italic mb-1">
          {pkg.priceNote}
        </p>
        <p className="text-xs text-[#D0D0D0] tracking-wide">
          {pkg.timeline} typical delivery
        </p>
      </div>

      <p className="text-[#D0D0D0] leading-relaxed mb-6">{pkg.description}</p>

      <div className="flex-1 mb-6">
        <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-4">
          INCLUDES
        </p>
        <ul className="space-y-2.5">
          {pkg.includes.map((item, iIdx) => (
            <li key={iIdx} className="flex items-start gap-2 text-sm">
              <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✓</span>
              <span className="text-[#E5E5E5]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Dropdown */}
      <div className="mb-4">
        <label className="block text-[#D4AF37] text-xs tracking-[0.15em] uppercase font-medium mb-2">
          AFFILIATION / DISCOUNT
        </label>
        <div className="relative">
          <select
            value={selectedDiscount}
            onChange={(e) => setSelectedDiscount(e.target.value)}
            className={selectClasses}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
          >
            {DISCOUNT_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
                {opt.percent > 0 ? ` (${opt.percent}% off)` : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Discount applied preview */}
        {discountPercent > 0 && (
          <div className="mt-3 p-3 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[#D4AF37]/20">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#D0D0D0]">
                Starting at{" "}
                <span className="line-through">
                  ${pkg.basePrice.toLocaleString()}
                </span>
              </span>
              <span className="text-[#D4AF37] font-bold">
                ${discountedBase.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-[#D4AF37]/70 mt-1">
              {discountPercent}% {discount?.label} discount applied
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className={`w-full rounded-full px-6 py-3 font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            pkg.popular
              ? "bg-[#D4AF37] text-[#FAFAFA] hover:bg-[#B8962E]"
              : "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#FAFAFA]"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              PROCESSING...
            </span>
          ) : (
            <>PAY &amp; GET STARTED</>
          )}
        </button>
        <Link
          to="/contact"
          className="block w-full text-center text-sm text-[#D0D0D0] hover:text-[#D4AF37] transition-colors py-2"
        >
          or book a free consultation first →
        </Link>
      </div>
    </div>
  );
}

export function PackagesSection() {
  return (
    <section className="relative py-32 px-8 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-8">
              ENGAGEMENT PACKAGES
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
              FLEXIBLE{" "}
              <span className="text-gold-gradient text-glow">PRICING.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#D0D0D0] leading-relaxed max-w-4xl mx-auto mb-4">
              Every project is different — these ranges reflect typical
              engagements, not fixed rates. We scope and price based on your
              specific goals, complexity, and timeline.
            </p>
            <p className="text-base text-[#D4AF37]/80 max-w-3xl mx-auto">
              A free consultation is the best way to get an accurate quote.
              Eligible affiliations receive automatic discounts at checkout.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Discount Info Note */}
        <AnimatedSection delay={0.25} className="mt-10 text-center">
          <div className="floating-card rounded-2xl p-5 md:p-6 max-w-4xl mx-auto border border-[#D4AF37]/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </span>
                <span className="text-[#D0D0D0]">
                  <span className="text-[#F5E6B8] font-medium">Alpha Phi Alpha</span> &amp;{" "}
                  <span className="text-[#F5E6B8] font-medium">Partner Chapters</span>{" "}
                  — 10% off
                </span>
              </div>
              <span className="hidden sm:block text-[#D4AF37]/30">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-[#D0D0D0]">
                  <span className="text-[#F5E6B8] font-medium">Referral</span>{" "}
                  — 15% off
                </span>
              </div>
              <span className="hidden sm:block text-[#D4AF37]/30">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                <span className="text-[#D0D0D0]">
                  <span className="text-[#F5E6B8] font-medium">Legacy</span>{" "}
                  — 20% off
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Custom Projects Note */}
        <AnimatedSection delay={0.35} className="mt-6 text-center">
          <div className="floating-card rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <p className="text-[#D0D0D0] leading-relaxed">
              <span className="text-[#D4AF37] font-medium">
                Need something custom?
              </span>{" "}
              Enterprise engagements, multi-brand portfolios, and complex
              platform builds are scoped individually. Book a strategy call and
              we'll build a proposal tailored to your needs.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
