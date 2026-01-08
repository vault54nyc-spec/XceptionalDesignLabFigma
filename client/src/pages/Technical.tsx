import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Database, Cpu, Lock, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Technical() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Technical <span className="text-yellow-500">Architecture</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Systems that scale. We implement the technical infrastructure and AI-driven workflows 
              that modern Chief of Staff offices require to operate at global standards.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Capability 1: AI Implementation */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">AI & Automation</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Moving beyond hype to practical application. We integrate AI tools that automate 
                  routine governance, streamline reporting, and enhance decision-making velocity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Workflow automation architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Custom AI agent deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Generative design system integration</span>
                  </li>
                </ul>
              </div>

              {/* Capability 2: Systems Governance */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Systems Governance</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Establishing the "Single Source of Truth." We build centralized repositories and 
                  microsites that house your organization's critical data and processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Enterprise microsite development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Knowledge management frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Data integrity & audit protocols</span>
                  </li>
                </ul>
              </div>

              {/* Capability 3: Security & Compliance */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Security & Compliance</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Leveraging CFE (Certified Fraud Examiner) standards to ensure your technical 
                  implementations are secure, compliant, and audit-ready.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Access control & permission audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Secure communication channel setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Risk mitigation strategies</span>
                  </li>
                </ul>
              </div>

              {/* Capability 4: Integration Strategy */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Network className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Integration Strategy</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Connecting the dots between disparate tools. We ensure your tech stack talks 
                  to itself, eliminating silos and reducing manual data entry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>API & middleware strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Cross-platform dashboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Legacy system modernization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-6xl">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">Featured Capability</h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Microsite Architecture</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Developed and deployed 3 centralized microsites to serve as the "Single Source of Truth" 
                    for organizational governance. Reduced information retrieval time by 40% and standardized 
                    onboarding across global teams.
                  </p>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Explore Technical Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/code-screen.jpg" 
                    alt="Technical Architecture" 
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
              Build a foundation that <span className="text-yellow-500">scales.</span>
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-lg">
              Audit Your Infrastructure
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
