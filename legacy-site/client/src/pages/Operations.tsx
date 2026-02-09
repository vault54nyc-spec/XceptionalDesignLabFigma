import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Operations() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Strategic <span className="text-[#D4AF37]">Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              We don't just manage projects; we build the governance,
              infrastructure, and crisis response frameworks that allow Fortune
              500s to scale safely.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Capability 1: Crisis Management */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <ShieldAlert className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">
                  Crisis Management & Disaster Relief
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Rapid response frameworks that protect your brand and
                  customers when it matters most. We build the models that
                  determine offer activation, extension, and scope during
                  critical events.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>First-to-market relief offer deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Pre- and post-disaster impact analysis models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Cross-functional command center leadership</span>
                  </li>
                </ul>
              </div>

              {/* Capability 2: Governance & Planning */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Enterprise Governance</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Standardizing chaos into clarity. We design governance
                  frameworks from scratch where none existed, creating
                  centralized documentation and operational resources.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>"MOD Reset" process architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>
                      Enterprise microsite development for central resources
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Annual planning & roadmap governance</span>
                  </li>
                </ul>
              </div>

              {/* Capability 3: Financial Integrity */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Financial Operations</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Certified Fraud Examiner (CFE) oversight for your most
                  critical budgets. We ensure transparency, compliance, and
                  strategic allocation of capital.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>
                      Multi-million dollar Capex prioritization models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>T&E budget governance & compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Vendor sourcing & contract management</span>
                  </li>
                </ul>
              </div>

              {/* Capability 4: Operational Efficiency */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Operational Efficiency</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Identifying process gaps and delivering solutions leveraging
                  AI-driven tools, automation, and streamlined workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>AI integration across workstreams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Dashboard & interactive tool development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Meeting cadence & logistics optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-6xl">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-sm font-bold text-[#C4A137] uppercase tracking-wider mb-2">
                    Case Study
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    2025 Disaster Relief Operations
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Managed 5 major global crisis events including Southern
                    California Wildfires and Myanmar Earthquake. Operationalized
                    first-to-market relief offers by building a new impact
                    analysis model from scratch.
                  </p>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/dashboard-analytics.jpg"
                    alt="Disaster Relief Dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-black text-white text-center">
          <div className="container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to optimize your{" "}
              <span className="text-[#D4AF37]">operations?</span>
            </h2>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#C4A137] hover:from-[#C4A137] hover:to-[#B49137] text-black font-bold px-12 py-6 text-lg"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
