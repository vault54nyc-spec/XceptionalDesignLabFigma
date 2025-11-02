import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cityscape-buildings.jpg" 
            alt="" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        {/* Hero Content */}
        <div className="container relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none">
            Redefining
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-700">
              Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide text-gray-200">
            Strategic Operations | Technical Mastery | Design Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-black font-semibold px-12 py-6 text-lg rounded-none"
            >
              Explore Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg rounded-none bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-900 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-widest">Years</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-red-900 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-widest">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-900 mb-2">98%</div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-widest">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Style. Class. Luxury. Section */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              STYLE. CLASS. LUXURY.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Where strategic thinking meets technical excellence and design sophistication
            </p>
          </div>
          
          {/* Image Grid with Animated Elements */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <div className="relative group overflow-hidden">
              <img 
                src="/images/clock-bw.webp" 
                alt="Precision Timing" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold">Precision</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden bg-black flex items-center justify-center">
              <img 
                src="/images/geometric-cube-anim.gif" 
                alt="Abstract Geometry" 
                className="w-full h-96 object-contain opacity-80 transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold">Innovation</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img 
                src="/images/camera-bw.webp" 
                alt="Creative Vision" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold">Vision</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-32 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Your Company
                <br />
                Is <span className="text-red-900">Growing</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                But your operations are fragmented. Your systems are breaking. Your team is overwhelmed.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                You need someone who can see the whole picture, fix what's broken, and build what's missing.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/wine-glass-luxury.webp" 
                alt="Luxury Excellence" 
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              We Are <span className="text-red-900">The Solution</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Xceptional Design Lab delivers the strategic thinking of a Chief of Staff, 
              the technical skills of a developer, and the visual excellence of a design studio.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Process design, workflow optimization, and operational excellence that scales with your business.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom development, system integration, and automation that transforms your operations.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Brand identity, visual systems, and communication design that elevates your presence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Architectural Excellence Section */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src="/images/stairs-architecture.webp" 
                alt="Structured Excellence" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Built On
                <br />
                <span className="text-red-900">Excellence</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Every system we build. Every process we design. Every brand we create.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Architected with precision. Executed with mastery. Delivered with excellence.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-black font-semibold px-12 py-6 text-lg rounded-none"
              >
                Start Your Project
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img 
            src="/images/geometric-pattern-anim.gif" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Who We <span className="text-red-900">Serve</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We partner with ambitious organizations ready to transform their operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Growth-Stage Companies</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You've proven product-market fit. Now you need systems that scale, 
                operations that work, and a brand that commands attention.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Established Enterprises</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You're ready to modernize. Transform legacy systems, streamline operations, 
                and elevate your brand to match your ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/luxury-workspace-bw.webp" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to Transform?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Let's build something exceptional together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-black font-semibold px-16 py-8 text-xl rounded-none"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
