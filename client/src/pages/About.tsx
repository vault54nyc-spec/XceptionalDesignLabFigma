import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Briefcase, Star, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 mb-6 px-4 py-1 text-sm font-bold">
                  Certified Chief of Staff® (CCOS)
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  The Architect <br />
                  <span className="text-gray-500">&</span> The Operator.
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Bridging the gap between executive vision and operational reality. 
                  I bring international governance standards, creative direction, and 
                  financial rigor to the Office of the Chief of Staff.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder for Headshot */}
                <img 
                  src="/images/headshot-placeholder.jpg" 
                  alt="Principal Consultant" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The "Fixer" Bio */}
        <section className="py-24 px-4">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">About the Principal</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                As a <strong>Certified Chief of Staff® (CCOS)</strong> and <strong>Project Management Professional (PMP)</strong>, 
                I specialize in bringing order to chaos. My career has been defined by a unique ability to operate at the intersection 
                of <strong>strategic governance</strong> and <strong>creative execution</strong>.
              </p>
              <p>
                Unlike traditional consultants who offer advice from the sidelines, I embed within leadership teams to build the 
                systems, narratives, and infrastructures that drive sustainable growth. From managing multi-million dollar Capex 
                portfolios to leading disaster relief operations for global crises, my work is grounded in a rigorous, 
                results-oriented methodology.
              </p>
              <p>
                With the added distinction of being a <strong>Certified Fraud Examiner (CFE)</strong>, I ensure that every strategy 
                is built on a foundation of integrity, compliance, and risk mitigation.
              </p>
            </div>
          </div>
        </section>

        {/* 2025 Strategic Impact */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">2025 Strategic Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                    <Briefcase className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Disaster Relief Leadership</h3>
                  <p className="text-gray-600 mb-4">
                    Architected the relief operations model for 5 major global events in 2025, including the SoCal Wildfires 
                    and Myanmar Earthquake. Mobilized resources and communications under extreme pressure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Governance & "MOD Reset"</h3>
                  <p className="text-gray-600 mb-4">
                    Designed and executed the "MOD Reset" framework, standardizing operational governance across the enterprise. 
                    Launched 3 centralized microsites to serve as the "Single Source of Truth."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Financial Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Built the FY26 Capex prioritization model, optimizing multi-million dollar investment portfolios 
                    to align with long-term strategic goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">AI-Enhanced Production</h3>
                  <p className="text-gray-600 mb-4">
                    Produced an agency-quality commercial for an executive pitch deck using advanced AI tools, 
                    saving thousands in production costs while exceeding stakeholder expectations.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="py-24 px-4">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Credentials & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-yellow-500 transition-colors">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">CCOS</h3>
                <p className="text-sm text-gray-500">Certified Chief of Staff®</p>
                <p className="text-xs text-gray-400 mt-2">Chief of Staff Association (CSA)</p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:border-yellow-500 transition-colors">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">PMP</h3>
                <p className="text-sm text-gray-500">Project Management Professional</p>
                <p className="text-xs text-gray-400 mt-2">Project Management Institute</p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:border-yellow-500 transition-colors">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">CFE</h3>
                <p className="text-sm text-gray-500">Certified Fraud Examiner</p>
                <p className="text-xs text-gray-400 mt-2">Assoc. of Certified Fraud Examiners</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
