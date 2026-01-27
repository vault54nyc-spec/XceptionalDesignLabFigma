import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Target,
  Palette,
  Globe,
  Megaphone,
  Building2,
  Rocket,
  Server,
  Bot,
  Plus,
} from "lucide-react";

// Service category type
interface ServiceCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  services: {
    name: string;
    price: string;
    description: string;
  }[];
}

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: "strategy",
      icon: Target,
      title: "Strategy, Audits & Planning",
      subtitle: "Transform chaos into clarity",
      description:
        "Launching without a plan is like driving without a map—you might end up somewhere, but it probably isn't where you wanted to go. Our strategy and audit services cut through guesswork and give you a foundation built on data and real market insight.",
      services: [
        {
          name: "30-minute discovery consultation",
          price: "Free",
          description:
            "Your first conversation costs nothing. We listen, ask the right questions, and sketch out what's actually possible for your business. No obligation, no pitch—just real talk about your goals and challenges.",
        },
        {
          name: "Strategy & creative consulting",
          price: "$150/hour",
          description:
            "Need a sounding board? Want to workshop a campaign idea or troubleshoot your messaging? We're here—by the hour—to think alongside you without committing to a full project.",
        },
        {
          name: "Brand & visual audit (light)",
          price: "$800–$2,000",
          description:
            "We review your logo, website, collateral, and how they all talk to each other. You'll walk away with a clear scorecard of what's working, what's confusing, and the quick wins you can implement right now.",
        },
        {
          name: "Marketing & digital audit",
          price: "$2,000–$5,000",
          description:
            "Deep dive into your website, social presence, email strategy, Google reviews, and campaign history. We'll assess it all against your actual business goals, deliver a 10–20 page report, and walk you through it live so nothing gets lost in translation.",
        },
        {
          name: "Comprehensive go-to-market audit",
          price: "$6,000–$20,000",
          description:
            "For scaling businesses and enterprise teams: full market segmentation, competitive landscape, channel-by-channel performance analysis, and a prioritized action roadmap for the next 6–12 months.",
        },
        {
          name: "Quarterly promo playbook",
          price: "$1,200–$3,000",
          description:
            "We map out 4–8 key campaigns for the season—what to push, when, where, and why. You get offer ideas, content angles, and a clear calendar so nothing gets left to last-minute panic.",
        },
        {
          name: "3–6 month content & channel plan",
          price: "$1,500–$4,000",
          description:
            "A structured calendar across your storefront, social media, email, print, and local partnerships. Every post, flyer, and email has a why and a timeline.",
        },
        {
          name: "Full-year marketing plan (small business)",
          price: "$4,000–$9,000",
          description:
            "Your complete annual roadmap—objectives, positioning, channel strategy, budget assumptions, KPIs, and quarterly milestones. Perfect for businesses ready to be intentional about growth.",
        },
        {
          name: "Full-year marketing plan (growth SMB or multi-location)",
          price: "$8,000–$18,000",
          description:
            "More complex? More locations? More stakeholders? We'll build a plan that coordinates across channels, teams, and geographies.",
        },
        {
          name: "Enterprise annual or divisional plan",
          price: "$20,000–$50,000+",
          description:
            "For Fortune 500 and major brands: multi-market strategy, internal alignment, performance metrics, and governance that scales.",
        },
      ],
    },
    {
      id: "brand",
      icon: Palette,
      title: "Brand Identity & Systems",
      subtitle: "Your visual identity is your first handshake",
      description:
        "Your brand is how the world recognizes and remembers you. Whether you're starting from scratch or leveling up, we build identity systems that feel authentic, look professional, and work across every place your customer touches you.",
      services: [
        {
          name: "Logo only",
          price: "$500–$1,200",
          description:
            "A single, professional logo with basic usage guidance. Perfect for early-stage businesses and organizations that need a clean mark to start with.",
        },
        {
          name: "Brand identity package (small business)",
          price: "$1,500–$3,500",
          description:
            "Logo set, mini brand guide (color palette, type system, basic layouts), and all the files you need to launch. Includes 2–3 rounds of revisions so we get it right.",
        },
        {
          name: "Expanded brand system (growth & SMB)",
          price: "$3,500–$7,500",
          description:
            "A robust 12–20 page brand guide with detailed usage rules, real examples across web, social, print, and signage. This is the manual your team uses to stay consistent as you grow.",
        },
        {
          name: "Enterprise brand or sub-brand system",
          price: "$8,000–$20,000+",
          description:
            "Complex architecture, multiple sub-brands, co-branding relationships, and governance documents so your entire enterprise stays on-message.",
        },
        {
          name: "Single flyer or poster",
          price: "$200–$450",
          description:
            "Event, promotion, announcement—whatever you need. Professional layout, compelling design, ready to print.",
        },
        {
          name: "Multi-page brochure (up to 8–12 pages)",
          price: "$600–$1,200",
          description:
            "Tell your full story across pages. Includes cover, interior spreads, and back panel.",
        },
        {
          name: "Business card design set",
          price: "$150–$600",
          description:
            "From a single design for you to a full template system for your team—clean, professional, memorable.",
        },
        {
          name: "Print collateral bundle",
          price: "$500–$1,500",
          description:
            "Business cards, flyer, postcards, and handout variants all coordinated and ready to print. Build your collateral arsenal in one go.",
        },
      ],
    },
    {
      id: "digital",
      icon: Globe,
      title: "Digital Presence & Communications",
      subtitle: "Your website and digital tools are open 24/7",
      description:
        "A strong digital presence isn't just about looking good—it's about converting attention into action. Whether it's a marketing website, a presentation deck, or email templates, we build digital properties that work as hard as you do.",
      services: [
        {
          name: "Website design, small site (4–5 key pages)",
          price: "$2,500–$4,000",
          description:
            "Home, about, services, contact, plus one feature page. Wireframes, design mockups, and handoff documentation—ready for your developer.",
        },
        {
          name: "Website design, growth/multi-page (8–15 pages)",
          price: "$4,000–$8,000",
          description:
            "Larger scope, more complex flows, possibly a blog or case study section. Full design system to keep pages cohesive as you scale.",
        },
        {
          name: "Website design, enterprise/microsite",
          price: "$8,000–$15,000+",
          description:
            "Campaign microsites, complex multi-step flows, or full brand site redesigns. Includes governance and scalable design systems.",
        },
        {
          name: "Social profile + header kit",
          price: "$350–$900",
          description:
            "Profile image, 2–3 cover header variations, and basic bio/description copywriting so your first impression is cohesive.",
        },
        {
          name: "Social content template pack (5–10 templates)",
          price: "$400–$1,000",
          description:
            "Fully designed, brand-aligned templates for posts, stories, reels, and announcements so your team has a head start every time they create.",
        },
        {
          name: "Google Slides or pitch template master",
          price: "$450–$1,200",
          description:
            'A fully branded master deck with multiple slide layouts, sample content, and guidelines. Your entire team uses it so presentations always look like "you."',
        },
        {
          name: "Sales, sponsorship, or investor deck design",
          price: "$800–$3,000",
          description:
            "Using a template or custom-built for your specific ask. Includes strategy on narrative flow and visual emphasis.",
        },
      ],
    },
    {
      id: "environmental",
      icon: Building2,
      title: "Storefront, Environmental & Event Graphics",
      subtitle: "Make every physical space work for you",
      description:
        "Your physical presence matters. Whether it's a window decal that stops foot traffic, a banner at an event, or directional signage in your venue, these touchpoints either help or hurt your story. We design them to help.",
      services: [
        {
          name: "Single window decal design",
          price: "$200–$400",
          description:
            "A promotional graphic, hours display, or brand statement for your storefront. Design only—you coordinate printing with your vendor or we can manage that for you.",
        },
        {
          name: "Set of 3 window decals",
          price: "$500–$900",
          description:
            "Coordinate your storefront with multiple messages (hours, current offer, value prop). All three designed to work together.",
        },
        {
          name: "Seasonal window system (4–6 campaigns across the year)",
          price: "$1,500–$3,000",
          description:
            "A master template system so you can refresh your windows seasonally without starting from scratch each time.",
        },
        {
          name: "Retractable banner design (per banner)",
          price: "$150–$400",
          description:
            "Perfect for trade shows, events, and pop-ups. Design that rolls up and travels with you.",
        },
        {
          name: "Table runner or table throw design",
          price: "$200–$450",
          description:
            "Brand your booth, event, or meeting room. Design that anchors the space.",
        },
        {
          name: "Step-and-repeat backdrop (simple, 1–2 logos)",
          price: "$250–$450",
          description:
            "The classic red-carpet photo backdrop—design only. Brands love these for events, sponsorships, and PR moments.",
        },
        {
          name: "Step-and-repeat sponsor wall (3–8 logos with hierarchy)",
          price: "$400–$900",
          description:
            "Complex sponsor recognition design that looks professional and respects everyone's placement. Great for galas, conferences, and major events.",
        },
        {
          name: "Event backdrop suite",
          price: "$900–$2,000",
          description:
            "One step-and-repeat plus 1–2 retractable banners plus matching social graphic. Everything coordinated for a cohesive event presence.",
        },
        {
          name: "Directional or wayfinding sign set (3–6 pieces)",
          price: "$500–$1,200",
          description:
            "Help people navigate your space with branded, professional signage.",
        },
      ],
    },
    {
      id: "campaigns",
      icon: Megaphone,
      title: "Campaigns & Multimedia",
      subtitle: "Ideas mean nothing without execution",
      description:
        "A campaign is where everything comes together—strategy, visuals, messaging, and across multiple channels. We conceive the idea, design the key visual, and create all the assets so you can launch with confidence.",
      services: [
        {
          name: "Campaign key visual + master layout",
          price: "$600–$2,000",
          description:
            "One integrated campaign concept with a hero visual, layout system, and clear guidelines for how to adapt it across channels (web, social, print).",
        },
        {
          name: "Campaign asset pack",
          price: "$2,000–$6,000",
          description:
            "The full suite for launch: hero for web, social variants (feed, story, square), email header, print flyer, and 1–2 banners. Ready to deploy across channels.",
        },
        {
          name: "Motion concepting (storyboards for video/animation)",
          price: "$800–$3,000",
          description:
            "Not the video itself—but the visual roadmap that guides animation or video production. Saves thousands in production rework.",
        },
      ],
    },
    {
      id: "infrastructure",
      icon: Server,
      title: "Website Operations, Automation & Digital Infrastructure",
      subtitle: "Behind every great website is smart tech",
      description:
        "Your website, email, and business tools either work for you or against you. We set up the infrastructure, wire together the automation, and teach your team how to use it—so your site and systems quietly earn revenue while you focus on the actual business.",
      services: [
        {
          name: "Website deployment & managed hosting setup",
          price: "$800–$3,000 + ~$50–$200/mo hosting",
          description:
            "We choose the right hosting platform for your size and needs, set up your site in a clean environment, configure backups and security, and hand you a system that requires zero server knowledge to update.",
        },
        {
          name: "Website performance optimization & deployment",
          price: "$1,500–$5,000",
          description:
            "Speed, SEO foundations, mobile responsiveness, and scalability audited and improved. A fast site is a money-making site.",
        },
        {
          name: "Code repository setup & governance",
          price: "$600–$1,500",
          description:
            "Private repositories for your code, design assets, and brand files. Version control so updates are organized, secure, and auditable—like an enterprise operation, not a folder on Dropbox.",
        },
        {
          name: "Backend infrastructure & API integration",
          price: "$1,200–$4,000+",
          description:
            "Connect your website to the tools you actually use: CRM, payment processors, analytics, forms. Smart wiring so data flows where it needs to go.",
        },
        {
          name: "Email automation workflow setup",
          price: "$800–$2,500",
          description:
            "Welcome series, abandoned cart recovery, post-purchase follow-ups, promotional sequences—all running automatically so no lead falls through the cracks.",
        },
        {
          name: "SMS automation setup",
          price: "$600–$2,000 + ~$20–$100/mo platform",
          description:
            "Text campaigns, alerts, and two-way conversations wired in so you're not manually texting customers one by one.",
        },
        {
          name: "CRM & automation platform configuration",
          price: "$1,500–$5,000",
          description:
            "Set up your email, SMS, and customer database so they all talk to each other. Forms that auto-populate. Data that flows. Team that knows what's happening.",
        },
        {
          name: "Email template design & copywriting",
          price: "$400–$1,500",
          description:
            "Professional, branded email templates for newsletters, promotions, transactional messages, and campaigns. Design + copy so every message hits.",
        },
        {
          name: "SMS template library",
          price: "$300–$800",
          description:
            "Ready-to-send text templates for different customer journeys (welcome, offer, reminder, feedback request) so you stay consistent and compliant.",
        },
        {
          name: "Internal process documentation",
          price: "$600–$2,000",
          description:
            "Step-by-step guides so your team can update the website, send campaigns, pull reports, and manage day-to-day work without calling you every time.",
        },
      ],
    },
    {
      id: "ai",
      icon: Bot,
      title: "AI-Powered Operations & Digital Transformation",
      subtitle: "AI isn't magic. It's practical.",
      description:
        "The businesses winning right now aren't the ones drowning in manual work—they're the ones using AI to work smarter. We map your workflows, integrate modern AI tools, and show your team how to use them responsibly so routine work happens automatically and humans focus on strategy and creativity.",
      services: [
        {
          name: "Process mapping & AI opportunity assessment",
          price: "$1,500–$4,000",
          description:
            "We sit with your team, map your current workflows, and identify where AI can safely take over repetitive tasks (data entry, FAQ responses, first-draft emails, report generation, etc.). You walk away with a clear roadmap of what can automate and what's best left to humans.",
        },
        {
          name: "AI workflow design & integration",
          price: "$2,000–$6,000",
          description:
            "We implement AI-powered tools and automations tailored to your business: chatbots, form auto-responders, content draft generators, smart routing, reporting dashboards, and more. Saves your team hours every week.",
        },
        {
          name: "AI & digital tools training workshop",
          price: "$1,200–$3,500 per session",
          description:
            "We sit with your team and teach them how to use the new tools and workflows. Not a scary tech talk—just clear, step-by-step guidance for every role so everyone feels confident and in control.",
        },
        {
          name: "Process documentation & playbooks",
          price: "$800–$2,500",
          description:
            "We write no-jargon, visual guides so your team can reference the process anytime. Training sticks when they can look it up themselves.",
        },
        {
          name: "Ongoing digital enablement & change management",
          price: "$150/hour or custom retainer",
          description:
            "As you roll out new tools and processes, we're there for follow-up Q&A, troubleshooting, and optimization. Change sticks when someone's helping along the way.",
        },
        {
          name: "Digital transformation strategy (enterprise)",
          price: "$10,000–$40,000+",
          description:
            "For large organizations: full assessment of where AI and automation can reduce cost and improve output, governance frameworks so adoption is controlled and compliant, and phased implementation roadmap.",
        },
      ],
    },
    {
      id: "addons",
      icon: Plus,
      title: "À la Carte Add-Ons",
      subtitle: "Need something extra?",
      description:
        "These bolt on to any project for when you need a little more—more options, faster turnaround, or ongoing support.",
      services: [
        {
          name: "Additional concept round",
          price: "+20–30% of item's fee",
          description:
            "More options never hurt. Add another round of concepts whenever scope allows it.",
        },
        {
          name: "Rush fee (timeline compression)",
          price: "+50–100% depending on deadline",
          description:
            "Need it faster? Let's talk about what's possible and what it costs.",
        },
        {
          name: "Extra revision cycles",
          price: "$150/hour or fixed per round",
          description:
            "Beyond what's in the contract, we're happy to refine. Let's just be clear on what we're paying for.",
        },
        {
          name: "Print production management",
          price: "15–25% of print invoice",
          description:
            "We talk to your printer, proof files, track timelines. You get clarity instead of juggling vendors.",
        },
        {
          name: "File adaptation for new sizes/platforms",
          price: "$50–$150 per variant",
          description:
            "Need that social post in a different size? That flyer in a vertical format? Quick adaptation.",
        },
        {
          name: "Extra social templates",
          price: "$50–$100 per template",
          description: "Need more post designs? We've got you.",
        },
        {
          name: "Extra presentation slides",
          price: "$50–$150 per slide",
          description: "Building out that deck? Add slides as you need them.",
        },
        {
          name: "Ongoing creative retainer",
          price: "Custom monthly rate (10–40 hrs/mo)",
          description:
            "Want us in the room regularly? Lock in a monthly fee for design, strategy, and creative direction. Perfect for teams that need consistent output without hiring in-house.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Brands That{" "}
              <span className="text-[#D4AF37]">Move</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe your brand isn't just a logo—it's the difference
              between customers who scroll past and customers who become
              loyalists.
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Whether you're a campus organization hungry for energy, a local
              business ready to convert foot traffic into revenue, or an
              enterprise scaling your presence across markets, we build the
              visual systems and digital foundations that make that happen.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Services & Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All pricing represents typical ranges based on current market
                rates. Final investment depends on your specific
                situation—complexity, timeline, and scope. The free consultation
                is how we figure out what "your" number actually looks like.
              </p>
            </div>

            <div className="space-y-6">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;

                return (
                  <div
                    key={category.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full px-6 py-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F9F5E8] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {category.title}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[#D4AF37] mb-2">
                          {category.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {category.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-3">
                          {category.services.length} services available • Click
                          to view details
                        </p>
                      </div>
                    </button>

                    {/* Expanded Services List */}
                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-6 space-y-6">
                          {category.services.map((service, idx) => (
                            <div
                              key={idx}
                              className="pl-4 border-l-2 border-[#D4AF37]"
                            >
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {service.name}
                                </h4>
                                <span className="text-[#D4AF37] font-bold text-sm whitespace-nowrap">
                                  {service.price}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F9F5E8]">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold mb-4">
                How We Work Together
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Free 30-minute discovery call
                  </h4>
                  <p className="text-sm">
                    No charge. No obligation. Just a real conversation about
                    your goals, challenges, and what's actually possible. We ask
                    good questions. You get clarity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Custom proposal
                  </h4>
                  <p className="text-sm">
                    Based on what we learned, we'll outline scope, timeline, and
                    investment in a clear one-pager so nothing's a surprise.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Collaborative execution
                  </h4>
                  <p className="text-sm">
                    We keep you in the loop, show progress along the way, and
                    make sure we're building what actually moves the needle for
                    your business.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-[#D4AF37]">
                    Special Note on Audits:
                  </p>
                  <p className="text-sm">
                    Audit fees can be credited 50–100% toward a larger
                    engagement if you move forward with implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're not a boutique that'll take 18 months and charge you for
              every email. We're not a commodity design factory that spits out
              cookie-cutter work. We're practical, scrappy, and we actually care
              about whether what we build moves your business forward.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-3">
                  For Local Businesses & Campus Organizations
                </h3>
                <p className="text-sm text-gray-600">
                  We treat you like you matter, because you do. Your budget
                  might be tighter, but your potential is huge. We build
                  identity and campaigns designed to turn lookers into regulars.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">For SMBs Scaling Up</h3>
                <p className="text-sm text-gray-600">
                  You need someone who gets growth. We wire together your
                  marketing, automation, and brand so every channel works
                  together instead of fighting for attention.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">
                  For Enterprise & Fortune 500
                </h3>
                <p className="text-sm text-gray-600">
                  You need a partner who speaks both creativity and governance.
                  We deliver campaign-ready work that passes internal review,
                  respects compliance, and scales across markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Everything Starts With a Conversation
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Your business has potential. Your customers are out there. The gap
              between "nice business" and "business that dominates" is usually
              better branding, smarter strategy, and systems that work while you
              sleep.
            </p>
            <p className="text-xl text-[#D4AF37] font-bold mb-8">
              We're here to close that gap.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#D4AF37] text-black hover:bg-[#c5a028] font-bold px-10 py-6 text-lg rounded-full"
              >
                Schedule Your Free Consultation
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-6">
              The first one's on us. No hard sell, no assumptions. Just real
              conversation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
