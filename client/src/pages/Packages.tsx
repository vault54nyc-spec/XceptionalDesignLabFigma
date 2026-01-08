import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Packages() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Engagement <span className="text-yellow-500">Models</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Flexible frameworks designed to meet you where you are. From targeted strategic interventions 
              to full-scale fractional Chief of Staff support.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-24 px-4">
          <div className="container max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Tier 1: The Audit */}
              <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gray-300" />
                <CardHeader className="pt-12 pb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Governance Audit</CardTitle>
                  <p className="text-gray-500 mt-2">The Diagnostic Phase</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 mb-8">
                    A comprehensive review of your current operational governance, communication flows, and technical infrastructure against CCOS standards.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Current State Assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Gap Analysis Report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Risk & Compliance Check (CFE)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Quick-Win Roadmap</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 pb-12">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Inquire for Pricing
                  </Button>
                </CardFooter>
              </Card>

              {/* Tier 2: The Project (Most Popular) */}
              <Card className="flex flex-col border-yellow-500 shadow-2xl scale-105 z-10 relative overflow-hidden bg-black text-white">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">Most Popular</Badge>
                </div>
                <CardHeader className="pt-12 pb-8">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Strategic Sprint</CardTitle>
                  <p className="text-gray-400 mt-2">Targeted Execution</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-300 mb-8">
                    Deploying the "Fixer" to solve a specific, high-stakes challenge. Perfect for product launches, reorgs, or crisis management.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">3-Month Intensive Engagement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Custom Microsite / Dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Executive Narrative Development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Weekly Steering Committee Leadership</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 pb-12">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                    Start a Sprint
                  </Button>
                </CardFooter>
              </Card>

              {/* Tier 3: The Retainer */}
              <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-black" />
                <CardHeader className="pt-12 pb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Crown className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Fractional CoS</CardTitle>
                  <p className="text-gray-500 mt-2">Long-Term Partnership</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 mb-8">
                    Ongoing "Right Hand" support for the C-Suite. We become an extension of your office, managing the rhythm of business.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Annual Planning & OKR Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Board Deck Production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Town Hall & All-Hands Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">On-Demand Crisis Response</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 pb-12">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                    Discuss Retainer
                  </Button>
                </CardFooter>
              </Card>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gray-50 text-center">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not sure which model fits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We often start with a Governance Audit to identify the highest-leverage opportunities 
              before moving into a Sprint or Retainer.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
              Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
