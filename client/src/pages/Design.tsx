import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Palette, Wand2, Video, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Design() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Design & <span className="text-yellow-500">Brand</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Where executive strategy meets high-end creative production. We replace expensive agencies 
              with agile, AI-enhanced design solutions that move at the speed of business.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Capability 1: AI Visualization */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Wand2 className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">AI-Enhanced Production</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Leveraging cutting-edge AI tools to create agency-quality commercials and visuals 
                  at a fraction of the cost and time. We don't just design; we engineer visual solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Commercial production for executive pitch decks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Rapid concept visualization & prototyping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Cost-saving alternative to traditional agencies</span>
                  </li>
                </ul>
              </div>

              {/* Capability 2: Executive Presentations */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Layers className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Executive Presentations</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Architecting the visual narrative for the C-Suite. From the "ValueVerse" CEO presentation 
                  to board-level reviews, we turn complex strategy into compelling stories.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Keynote & Board Deck architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Visual storytelling for complex data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>On-set creative direction for leadership</span>
                  </li>
                </ul>
              </div>

              {/* Capability 3: Brand Identity */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Brand Identity</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Building cohesive visual systems that resonate. We ensure your internal and external 
                  communications reflect the premium quality of your operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Enterprise microsite design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Visual identity guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Cross-platform brand consistency</span>
                  </li>
                </ul>
              </div>

              {/* Capability 4: Media Production */}
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Video className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold">Media Production</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  End-to-end production support, from concept to edit. We bridge the gap between 
                  technical requirements and creative vision.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Video editing & post-production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Motion graphics & animation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-1" />
                    <span>Digital content creation</span>
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
                  <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">Featured Project</h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Commercial Production</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Created an agency-quality commercial for a major client's executive pitch deck using advanced AI tools. 
                    The result? Thousands of dollars saved, faster turnaround, and a visual product that exceeded expectations.
                  </p>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/team-collaboration.jpg" 
                    alt="Creative Production" 
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
              Need agency quality without the <span className="text-yellow-500">agency bloat?</span>
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-lg">
              Book a Creative Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
