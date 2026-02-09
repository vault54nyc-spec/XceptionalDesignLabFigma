import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Mic2,
  Users,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Communications() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Strategic <span className="text-[#D4AF37]">Communications</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              We craft the narratives that move markets and mobilize teams. From
              internal change management to executive thought leadership, we
              ensure your message lands with precision.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Capability 1: Executive Messaging */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <Mic2 className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Executive Messaging</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Positioning leaders as visionaries. We develop the talking
                  points, scripts, and keynote narratives that define your
                  leadership brand.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Keynote speechwriting & coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Town Hall & All-Hands orchestration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Leadership communication frameworks</span>
                  </li>
                </ul>
              </div>

              {/* Capability 2: Change Management */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Change Management</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Guiding organizations through transformation. We build the
                  communication strategies that drive adoption and minimize
                  resistance during critical shifts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Organizational restructure messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Culture & engagement campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Stakeholder alignment strategies</span>
                  </li>
                </ul>
              </div>

              {/* Capability 3: Internal Comms */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Internal Communications</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Keeping your workforce informed and inspired. We design the
                  channels and content that connect employees to the company
                  mission.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Newsletter & intranet content strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Employee recognition programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Policy rollout & education</span>
                  </li>
                </ul>
              </div>

              {/* Capability 4: Crisis Communications */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-sm flex items-center justify-center">
                  <Newspaper className="w-8 h-8 text-[#C4A137]" />
                </div>
                <h3 className="text-3xl font-bold">Crisis Communications</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Protecting reputation under pressure. We provide real-time
                  messaging support during operational disruptions and public
                  relations challenges.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Disaster response communication protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Media holding statements & FAQs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A137] mt-1" />
                    <span>Reputation management strategy</span>
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
                  <h3 className="text-sm font-bold text-[#C4A137] uppercase tracking-wider mb-2">
                    Featured Project
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    The "MOD Reset" Initiative
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Designed the comprehensive communication strategy for a
                    major operational reset. Aligned cross-functional teams,
                    launched enterprise microsites, and standardized governance
                    across the organization.
                  </p>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/meeting-presentation.jpg"
                    alt="Strategic Communications"
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
              Words matter.{" "}
              <span className="text-[#D4AF37]">Make them count.</span>
            </h2>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#C4A137] hover:from-[#C4A137] hover:to-[#B49137] text-black font-bold px-12 py-6 text-lg"
            >
              Refine Your Message
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
