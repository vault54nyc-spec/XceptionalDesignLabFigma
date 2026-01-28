import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Target,
  Settings,
  DollarSign,
  FileText,
  Palette,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [, setLocation] = useLocation();

  // Prevent scrolling when the entrance overlay is active
  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [entered]);

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-x-hidden">
      {/* Entrance Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ease-in-out ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="relative cursor-pointer transform transition-transform duration-700 hover:scale-105"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setEntered(true)}
        >
          {/* Golden Glow Effect */}
          <div
            className={`absolute inset-0 rounded-full bg-[#D4AF37] blur-[100px] transition-opacity duration-700 ${
              hovered ? "opacity-40" : "opacity-0"
            }`}
          />

          {/* Logo Image with Radial Mask */}
          <img
            src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/LOGO.png"
            alt="Xceptional Design Lab Entrance"
            className="relative z-10 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain transition-all duration-700"
            style={{
              maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
            }}
          />

          {/* Click to Enter Prompt */}
          <div
            className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm tracking-[0.3em] uppercase transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Click to Enter
          </div>
        </div>
      </div>

      {/* Main Website Content */}
      <div
        className={`transition-opacity duration-1000 delay-500 ${entered ? "opacity-100" : "opacity-0"}`}
      >
        <Navigation />

        <main className="flex-1">
          {/* Hero Section - Perplexity Split-Screen Layout */}
          <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#D4AF37 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* LEFT COLUMN - Content */}
                <div className="space-y-8 lg:pr-8">
                  <Badge className="bg-[#D4AF37] text-black hover:bg-[#E8C547] px-4 py-2 text-xs font-bold tracking-wide uppercase">
                    Fortune 500 Caliber
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                    Fortune 500 Operations
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
                      Built for Your Business
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-xl">
                    Enterprise-grade strategy, execution, and systems—without
                    the enterprise overhead. We bring Chief of Staff expertise,
                    technical development, and executive communications to
                    growing companies.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-[#E8C547] font-bold px-10 py-7 text-lg rounded-sm transition-all hover:scale-105"
                      >
                        Start Your Transformation{" "}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black font-semibold px-10 py-7 text-lg rounded-sm"
                      >
                        Explore Solutions
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-8 flex flex-wrap gap-6 opacity-80">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-semibold tracking-wider uppercase">
                        Certified Chief of Staff
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-semibold tracking-wider uppercase">
                        $48M+ Delivered
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-semibold tracking-wider uppercase">
                        150+ Projects
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - Professional Photo */}
                <div className="relative lg:pl-8">
                  {/* Photo Frame with Gold Accent Border */}
                  <div className="relative group">
                    {/* Decorative Gold Border Frame */}
                    <div className="absolute -inset-4 border-2 border-[#D4AF37] transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 rounded-lg" />
                    
                    {/* Main Photo Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[3/4] max-w-md mx-auto">
                      <img
                        src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/E0DUk1xj.jpeg"
                        alt="Professional Executive Portrait"
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Subtle gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Professional Badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-[#D4AF37]/30">
                      <p className="text-xs text-[#D4AF37] font-bold tracking-widest uppercase mb-1">
                        Leadership
                      </p>
                      <p className="text-white font-semibold text-lg">
                        Christopher Henry
                      </p>
                      <p className="text-gray-300 text-sm">
                        Certified Chief of Staff • Fortune 500 Operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section - From Perplexity */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Growing Companies Deserve{" "}
                  <span className="text-[#D4AF37]">Fortune 500 Operations</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Most scaling businesses face an impossible choice: hire
                  expensive specialists, overwork existing teams, or settle for
                  inadequate solutions. We offer a fourth option.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    The Hard Truth
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                    You shouldn't need to hire a{" "}
                    <strong>
                      Chief of Staff AND a project manager AND a developer AND a
                      designer AND a consultant
                    </strong>
                    .
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                    You need one partner who can be all of these—with the
                    expertise to do each one exceptionally well.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    That's what we do. We take the Fortune 500 playbook and
                    adapt it for companies that need enterprise-grade operations
                    without enterprise-grade overhead.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">
                    Traditional vs. Xceptional
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        old: "Hire multiple specialists",
                        new: "One integrated partner",
                      },
                      {
                        old: "5+ contracts to manage",
                        new: "Single point of contact",
                      },
                      {
                        old: "Siloed deliverables",
                        new: "Integrated solutions",
                      },
                      {
                        old: "Higher total cost",
                        new: "Startup-friendly pricing",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 line-through">
                            {item.old}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-black">
                            {item.new}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seven Capabilities Section - From Perplexity (Simplified) */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Seven Capabilities<span className="text-[#D4AF37]">.</span>{" "}
                  One Partner<span className="text-[#D4AF37]">.</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  We integrate strategy, execution, technology, and design into
                  complete operational solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: Target,
                    emoji: "🎯",
                    title: "Strategic Operations",
                    desc: "Governance frameworks, financial planning, project management, and fractional Chief of Staff services.",
                    link: "/operations",
                  },
                  {
                    icon: Settings,
                    emoji: "⚙️",
                    title: "Technical Solutions",
                    desc: "Custom dashboards, web applications, automation, data analysis, and rapid response operations.",
                    link: "/technical",
                  },
                  {
                    icon: BarChart3,
                    emoji: "📊",
                    title: "Executive Communications",
                    desc: "Board presentations, investor materials, strategic communications, and executive-grade deliverables.",
                    link: "/communications",
                  },
                  {
                    icon: DollarSign,
                    emoji: "💰",
                    title: "Financial Operations",
                    desc: "Budget management, forecasting models, financial dashboards, cost analysis, and governance.",
                    link: "/services",
                  },
                  {
                    icon: FileText,
                    emoji: "📋",
                    title: "Documentation & Knowledge",
                    desc: "SOPs, playbooks, operational manuals, process documentation, and institutional knowledge systems.",
                    link: "/services",
                  },
                  {
                    icon: Palette,
                    emoji: "🎨",
                    title: "Design & Brand",
                    desc: "Brand identity, marketing collateral, visual systems, creative design, and professional visuals.",
                    link: "/design",
                  },
                  {
                    icon: Zap,
                    emoji: "⚡",
                    title: "Crisis & Rapid Response",
                    desc: "Emergency operations, disaster relief coordination, rapid deployment solutions, and urgent support.",
                    link: "/services",
                  },
                ].map((service, i) => (
                  <Link key={i} href={service.link}>
                    <div className="bg-white p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D4AF37] group cursor-pointer h-full">
                      <div className="text-4xl mb-4">{service.emoji}</div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex items-center text-[#D4AF37] font-bold text-sm group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section - From Perplexity */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Proven Results
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                  We don't just advise. We execute, deliver, and drive measurable
                  impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    metric: "$48M+",
                    label: "In operational efficiency delivered",
                  },
                  { metric: "92%", label: "Client satisfaction rate" },
                  { metric: "7-day", label: "Average project turnaround" },
                  { metric: "150+", label: "Completed deliverables" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 p-6 sm:p-8 rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-all text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-3">
                      {stat.metric}
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Strategic Evolution - Keep from current */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                    Not Just a Creative Agency. <br />
                    <span className="text-[#D4AF37]">A Growth Engine.</span>
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    We've evolved. While our roots are in design, our impact is
                    in operations. The word "design" now encompasses the entire
                    architecture of your business.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {[
                      "Design of business operations",
                      "Design of governance systems",
                      "Design of financial structures",
                      "Design of technology solutions",
                      "Design of executive communications",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-base sm:text-lg font-medium text-gray-800"
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="text-black font-bold text-base sm:text-lg p-0 hover:text-[#D4AF37]"
                    >
                      Read Our Story <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#D4AF37] opacity-20 rounded-3xl transform rotate-3" />
                  <div className="relative bg-black text-white p-8 sm:p-10 rounded-2xl shadow-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#D4AF37]">
                      The Xceptional Difference
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg mb-1">
                            One Partner, Entire Team
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Replace a Chief of Staff, Project Manager,
                            Developer, and Designer with one integrated partner.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg mb-1">
                            Fortune 500 at Startup Speed
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Enterprise-grade methodology adapted for agile,
                            growing companies.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg mb-1">
                            We Execute, Not Just Advise
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Traditional consultants recommend. We build,
                            implement, and deliver.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
            <div className="container max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
                Ready to scale with <br />
                <span className="text-[#D4AF37]">Enterprise Precision?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Whether you need a fractional Chief of Staff, a financial
                dashboard, or a complete operational overhaul—we've done it at
                the highest levels.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] text-black hover:bg-[#c5a028] font-bold px-10 sm:px-12 py-6 text-base sm:text-lg rounded-full"
                >
                  Book a Free Strategy Call
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
