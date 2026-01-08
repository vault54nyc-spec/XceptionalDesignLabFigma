import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Star, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div className="h-screen w-screen bg-white flex items-center justify-center overflow-hidden relative">
        <div 
          className="relative cursor-pointer group transition-all duration-700 hover:scale-105"
          onClick={() => setEntered(true)}
        >
          {/* Logo Image with Radial Mask */}
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
            <img 
              src="/images/logo-entrance.png" 
              alt="Xceptional Design Lab Entrance" 
              className="w-full h-full object-contain"
              style={{
                maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
              }}
            />
            
            {/* Golden Glow Effect on Hover */}
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Click Prompt */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Click to Enter
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white animate-in fade-in duration-1000">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Logo (Faded) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img 
              src="/images/logo-entrance.png" 
              alt="Background" 
              className="w-[80vw] h-[80vw] object-contain grayscale"
            />
          </div>

          <div className="container relative z-10 text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Chief of Staff® (CCOS)</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight animate-in slide-in-from-bottom-8 duration-1000 delay-500">
              Governance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Design.
              </span> <br />
              Execution.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-700">
              Bringing elite, international standards of the Chief of Staff profession to your organization. 
              We architect the systems, narratives, and visuals that define world-class leadership.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-1000">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-bold transition-all hover:scale-105">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-900 text-lg px-8 py-6 rounded-full font-medium">
                  View Credentials
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-gray-900 bg-black/50 backdrop-blur-sm">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Global Crisis Events Managed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">$MM+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Capex Prioritization Models</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">3</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Enterprise Microsites Launched</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-32 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Office of the <br /><span className="text-yellow-500">Chief of Staff</span></h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  We don't just consult; we operate. Leveraging the Certified Chief of Staff® competency framework, 
                  we provide the strategic scaffolding that allows executives to lead with clarity and impact.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg">
                    <Globe className="w-5 h-5 text-yellow-500" />
                    <span>International Governance Standards</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <ShieldCheck className="w-5 h-5 text-yellow-500" />
                    <span>Certified Fraud Examiner (CFE) Integrity</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Award-Winning Creative Direction</span>
                  </li>
                </ul>
                <Link href="/operations">
                  <Button variant="link" className="text-yellow-500 p-0 text-lg hover:text-yellow-400">
                    Explore Our Framework <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-8 rounded-2xl aspect-square flex flex-col justify-between group hover:bg-gray-800 transition-colors">
                  <span className="text-4xl font-bold text-gray-700 group-hover:text-yellow-500 transition-colors">01</span>
                  <span className="text-xl font-bold">Strategic <br />Operations</span>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl aspect-square flex flex-col justify-between group hover:bg-gray-800 transition-colors translate-y-8">
                  <span className="text-4xl font-bold text-gray-700 group-hover:text-yellow-500 transition-colors">02</span>
                  <span className="text-xl font-bold">Design & <br />Brand</span>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl aspect-square flex flex-col justify-between group hover:bg-gray-800 transition-colors">
                  <span className="text-4xl font-bold text-gray-700 group-hover:text-yellow-500 transition-colors">03</span>
                  <span className="text-xl font-bold">Technical <br />Architecture</span>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl aspect-square flex flex-col justify-between group hover:bg-gray-800 transition-colors translate-y-8">
                  <span className="text-4xl font-bold text-gray-700 group-hover:text-yellow-500 transition-colors">04</span>
                  <span className="text-xl font-bold">Crisis <br />Comms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Roster (Placeholder for now) */}
        <section className="py-24 border-t border-gray-900">
          <div className="container text-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-12">Trusted by Leaders At</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
              {/* Replace with real logos later */}
              <span className="text-2xl font-bold text-gray-600">FORTUNE 100 TELECOM</span>
              <span className="text-2xl font-bold text-gray-600">GLOBAL NON-PROFITS</span>
              <span className="text-2xl font-bold text-gray-600">ENTERTAINMENT BRANDS</span>
              <span className="text-2xl font-bold text-gray-600">MUNICIPAL AGENCIES</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
