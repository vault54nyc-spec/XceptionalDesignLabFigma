import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Play,
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
  const [videoEnded, setVideoEnded] = useState(false);
  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const didInitPlayback = useRef(false);

  // Prevent scrolling when the entrance overlay is active
  useEffect(() => {
    if (!videoEnded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [videoEnded]);

  // Auto-play video on mount. If autoplay is blocked or the video errors, reveal the site.
  useEffect(() => {
    if (didInitPlayback.current) return;
    didInitPlayback.current = true;

    const v = videoRef.current;
    if (!v) return;

    const maybePromise = v.play();
    if (maybePromise && typeof (maybePromise as any).catch === "function") {
      (maybePromise as any).catch(() => {
        setVideoEnded(true);
        setEntered(true);
      });
    }
  }, []);

  // Handle video end
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setEntered(true);
  };

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-x-hidden">
      {/* Opening Animation Video */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
          onError={handleVideoEnd}
          autoPlay
          playsInline
          muted
          preload="auto"
        >
          <source
            src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/Sequence%2003.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Main Website Content */}
      <div
        className={`transition-opacity duration-1000 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />

        <main className="flex-1">
          {/* Hero Video Placeholder (anchored at top) */}
          <section className="relative bg-[#050507]">
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_20%,rgba(34,211,238,0.20),transparent_60%),radial-gradient(900px_380px_at_80%_30%,rgba(217,70,239,0.16),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_30%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
              <div className="relative h-full flex items-center justify-center px-6">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <Play className="h-4 w-4 text-white/80" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.2em] text-white/70">
                      HERO VIDEO
                    </div>
                    <div className="text-sm text-white/85">
                      Placeholder (coming soon)
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
          </section>

          {/* PERPLEXITY-STYLE HERO - Split Screen with Photo */}
          <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                
                {/* LEFT SIDE - Text Content */}
                <div className="space-y-8">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    Fortune 500 Operations<span className="text-[#D4AF37]">.</span>
                    <br />
                    Built for Your Business<span className="text-[#D4AF37]">.</span>
                  </h1>

                  <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                    Complete end-to-end operational solutions for growing companies.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    From governance to dashboards, from budgets to crisis response—we handle everything you need to scale.
                  </p>

                  {/* Credentials Box */}
                  <div className="bg-[#F9F5E8] p-6 border-l-4 border-[#D4AF37]">
                    <p className="text-[#D4AF37] font-bold mb-2">
                      Led by a Verizon Chief of Staff
                    </p>
                    <p className="text-gray-700 text-sm">
                      16+ years across operations, finance, technology, and design | PMP | CFE | Certified Chief of Staff
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/#book-call">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-[#c5a028] font-bold px-10 py-7 text-lg"
                      >
                        Book Free Strategy Call
                      </Button>
                    </a>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-[#D4AF37] text-[#D4AF37] hover:bg-[#F9F5E8] font-semibold px-10 py-7 text-lg"
                      >
                        Explore Services
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE - Professional Photo */}
                <div className="relative order-first lg:order-last w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/assets/images/hero-professional-photo.jpg"
                      alt="Sir Christopher DeMarkus - Chief of Staff"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <img
                      src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/Credentials%20(2).svg"
                      alt="Credentials"
                      className="h-12 w-auto opacity-95"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 lg:w-64 lg:h-64 bg-[#D4AF37] opacity-20 rounded-full blur-3xl -z-10" />
                </div>

              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">$48M+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">150+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">7-day</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Avg Turnaround</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">92%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Growing Companies Deserve Fortune 500 Operations
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Most scaling businesses face an impossible choice: hire expensive specialists, overwork existing teams, or settle for inadequate solutions. We offer a fourth option.
              </p>
              <div className="bg-[#F9F5E8] p-8 border-l-4 border-[#D4AF37] my-8">
                <h3 className="text-2xl font-bold mb-4">The Hard Truth</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You shouldn't need to hire a Chief of Staff AND a project manager AND a developer AND a designer AND a consultant.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  You need one partner who can be all of these—with the expertise to do each one exceptionally well.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
                  That's what we do. We take the Fortune 500 playbook and adapt it for companies that need enterprise-grade operations without enterprise-grade overhead.
                </p>
              </div>
            </div>
          </section>

          {/* Traditional vs Xceptional Comparison */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
              <h2 className="text-4xl font-bold mb-12 text-center">Traditional vs. Xceptional</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Traditional Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-gray-700">Hire multiple specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-gray-700">5+ contracts to manage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-gray-700">Siloed deliverables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-gray-700">Higher total cost</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F9F5E8] p-8 rounded-lg shadow-md border-2 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Xceptional Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">✓</span>
                      <span className="text-gray-700">One integrated partner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">✓</span>
                      <span className="text-gray-700">Single point of contact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">✓</span>
                      <span className="text-gray-700">Integrated solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-3">✓</span>
                      <span className="text-gray-700">Startup-friendly pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seven Capabilities Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Seven Capabilities. One Partner.</h2>
                <p className="text-xl text-gray-600">
                  We integrate strategy, execution, technology, and design into complete operational solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Strategic Operations */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Strategic Operations</h3>
                  <p className="text-gray-600 mb-4">
                    Governance frameworks, financial planning, project management, and fractional Chief of Staff services.
                  </p>
                  <Link href="/operations">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Technical Solutions */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold mb-3">Technical Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Custom dashboards, web applications, automation, data analysis, and rapid response operations.
                  </p>
                  <Link href="/technical">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Executive Communications */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3">Executive Communications</h3>
                  <p className="text-gray-600 mb-4">
                    Board presentations, investor materials, strategic communications, and executive-grade deliverables.
                  </p>
                  <Link href="/communications">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Financial Operations */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3">Financial Operations</h3>
                  <p className="text-gray-600 mb-4">
                    Budget management, forecasting models, financial dashboards, cost analysis, and governance.
                  </p>
                  <Link href="/operations">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Documentation & Knowledge */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-3">Documentation & Knowledge</h3>
                  <p className="text-gray-600 mb-4">
                    SOPs, playbooks, operational manuals, process documentation, and institutional knowledge systems.
                  </p>
                  <Link href="/operations">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Design & Brand */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-3">Design & Brand</h3>
                  <p className="text-gray-600 mb-4">
                    Brand identity, marketing collateral, visual systems, creative design, and professional visuals.
                  </p>
                  <Link href="/design">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>

                {/* Crisis & Rapid Response */}
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3">Crisis & Rapid Response</h3>
                  <p className="text-gray-600 mb-4">
                    Emergency operations, disaster relief coordination, rapid deployment solutions, and urgent support.
                  </p>
                  <Link href="/operations">
                    <Button variant="link" className="text-[#D4AF37] p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Proven Results Section */}
          <section className="py-20 bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
              <h2 className="text-4xl font-bold mb-12 text-center">Proven Results</h2>
              <p className="text-xl text-center text-gray-300 mb-16">
                We don't just advise. We execute, deliver, and drive measurable impact.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">$48M+</div>
                  <p className="text-gray-400">In operational efficiency delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">92%</div>
                  <p className="text-gray-400">Client satisfaction rate</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">7-day</div>
                  <p className="text-gray-400">Average project turnaround</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-3">150+</div>
                  <p className="text-gray-400">Completed deliverables</p>
                </div>
              </div>
            </div>
          </section>

          {/* Not Just a Creative Agency Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Not Just a Creative Agency.<br />A Growth Engine.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We've evolved. While our roots are in design, our impact is in operations. The word "design" now encompasses the entire architecture of your business.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design of business operations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design of governance systems</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design of financial structures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design of technology solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Design of executive communications</span>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link href="/about">
                  <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#F9F5E8]">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* The Xceptional Difference */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
              <h2 className="text-4xl font-bold mb-12 text-center">The Xceptional Difference</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">One Partner, Entire Team</h3>
                  <p className="text-gray-600">
                    Replace a Chief of Staff, Project Manager, Developer, and Designer with one integrated partner.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Fortune 500 at Startup Speed</h3>
                  <p className="text-gray-600">
                    Enterprise-grade methodology adapted for agile, growing companies.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">We Execute, Not Just Advise</h3>
                  <p className="text-gray-600">
                    Traditional consultants recommend. We build, implement, and deliver.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to scale with<br />Enterprise Precision?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Whether you need a fractional Chief of Staff, a financial dashboard, or a complete operational overhaul—we've done it at the highest levels.
              </p>
              <a href="/#book-call">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] text-black hover:bg-[#c5a028] font-bold px-12 py-8 text-xl"
                >
                  Book a Free Strategy Call
                </Button>
              </a>
            </div>
          </section>

          {/* Booking Section */}
          <section id="book-call" className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8 text-center">Book Your Free Strategy Call</h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Let's discuss how we can help scale your operations with Fortune 500 precision.
              </p>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <iframe
                  src="https://cal.com/xceptional-design-lab/30min"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  title="Book a call with Xceptional Design Lab"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
