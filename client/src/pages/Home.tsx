import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Layers } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative">
      
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
            src="/xceptional-logo-hero.png" 
            alt="Xceptional Design Lab Entrance" 
            className="relative z-10 w-[400px] md:w-[600px] h-auto object-contain transition-all duration-700"
            style={{
              maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)"
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
      <div className={`transition-opacity duration-1000 delay-500 ${entered ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
            
            <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto">
              <Badge className="bg-[#00CFC1] text-black hover:bg-[#00b8ab] mb-8 px-6 py-2 text-sm font-bold tracking-wide uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                Complete Operational Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
                Strategic Operations <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
                  By Design.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1200">
                We design everything your business needs to scale. <br className="hidden md:block" />
                Strategy + Execution + Technology + Design. All in one partner.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1400">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#00CFC1] text-black hover:bg-[#00b8ab] font-bold px-10 py-7 text-lg rounded-full transition-all hover:scale-105">
                    Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black font-semibold px-10 py-7 text-lg rounded-full">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-20 pt-10 border-t border-gray-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 animate-in fade-in duration-1000 delay-1600">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-sm font-semibold tracking-wider">FORTUNE 500 PEDIGREE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-sm font-semibold tracking-wider">$2.5M+ SAVINGS DELIVERED</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-sm font-semibold tracking-wider">CERTIFIED CHIEF OF STAFF</span>
                </div>
              </div>
            </div>
          </section>

          {/* The Strategic Evolution */}
          <section className="py-24 px-4 bg-white">
            <div className="container max-w-6xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Not Just a Creative Agency. <br />
                    <span className="text-[#00CFC1]">A Growth Engine.</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We've evolved. While our roots are in design, our impact is in operations. 
                    The word "design" now encompasses the entire architecture of your business.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Design of business operations",
                      "Design of governance systems",
                      "Design of financial structures",
                      "Design of technology solutions",
                      "Design of executive communications"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-800">
                        <CheckCircle2 className="w-6 h-6 text-[#00CFC1]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/about">
                    <Button variant="link" className="text-black font-bold text-lg p-0 hover:text-[#00CFC1]">
                      Read Our Story <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#D4AF37] opacity-20 rounded-3xl transform rotate-3" />
                  <div className="relative bg-black text-white p-10 rounded-2xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">The Xceptional Difference</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Layers className="w-6 h-6 text-[#00CFC1]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">One Partner, Entire Team</h4>
                          <p className="text-gray-400 text-sm">
                            Replace a Chief of Staff, Project Manager, Developer, and Designer with one integrated partner.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-6 h-6 text-[#00CFC1]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Fortune 500 at Startup Speed</h4>
                          <p className="text-gray-400 text-sm">
                            Enterprise-grade methodology adapted for agile, growing companies.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-[#00CFC1]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">We Execute, Not Just Advise</h4>
                          <p className="text-gray-400 text-sm">
                            Traditional consultants recommend. We build, implement, and deliver.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Preview */}
          <section className="py-24 px-4 bg-gray-50">
            <div className="container max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-4">End-to-End Capabilities</h2>
                <p className="text-xl text-gray-600">
                  From strategic governance to pixel-perfect design, we handle the critical functions 
                  that allow you to focus on growth.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Strategic Operations",
                    desc: "Governance, Crisis Mgmt, Financial Strategy",
                    icon: ShieldCheck,
                    link: "/operations"
                  },
                  {
                    title: "Technical Solutions",
                    desc: "Dashboards, Microsites, Automation",
                    icon: Zap,
                    link: "/technical"
                  },
                  {
                    title: "Executive Comms",
                    desc: "Board Decks, Investor Materials, Strategy",
                    icon: BarChart3,
                    link: "/communications"
                  },
                  {
                    title: "Design & Brand",
                    desc: "Identity, Marketing Collateral, Creative",
                    icon: Layers,
                    link: "/design"
                  }
                ].map((service, i) => (
                  <Link key={i} href={service.link}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00CFC1] group cursor-pointer h-full">
                      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00CFC1] transition-colors">
                        <service.icon className="w-7 h-7 text-black" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
                      <div className="flex items-center text-[#00CFC1] font-bold text-sm group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-4 bg-black text-white text-center">
            <div className="container max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to scale with <br />
                <span className="text-[#00CFC1]">Enterprise Precision?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Whether you need a fractional Chief of Staff, a financial dashboard, or a complete 
                operational overhaul—we've done it at the highest levels.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c5a028] font-bold px-12 py-6 text-lg rounded-full">
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
