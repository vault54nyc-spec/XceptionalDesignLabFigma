import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, TrendingUp, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-yellow-500">Christopher</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              A Multi-Disciplinary Executive with over 15 years of experience traversing the worlds of 
              high-stakes corporate strategy, creative media production, and technical innovation.
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <img 
                  src="/portrait-professional.jpg" 
                  alt="Christopher D. Henry" 
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">The "Fixer" for Fortune 500s</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Christopher D. Henry is not defined by a single lane. He is a <strong>Certified Chief of Staff (CCOS)</strong>, 
                    <strong> Project Management Professional (PMP)</strong>, <strong>Certified Fraud Examiner (CFE)</strong>, 
                    and <strong>Creative Director</strong> rolled into one.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-600">2025 Strategic Impact</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Disaster Relief Leadership:</strong> Managed 5 major global crisis events in 2025, ensuring first-to-market customer relief offers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Process Architecture:</strong> Built the "MOD Reset" governance framework and 3 enterprise microsites from scratch.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Financial Strategy:</strong> Developed multi-million dollar Capex prioritization models for FY26 planning.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Executive Visuals:</strong> Architected the "ValueVerse" presentation for the CEO and President.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>AI Commercial Production:</strong> Created an agency-quality commercial for an executive pitch deck using AI, saving thousands in resources while exceeding quality expectations for a top-tier client.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-6">Certifications & Credentials</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Award className="w-8 h-8 text-yellow-600" />
                      <div>
                        <div className="font-bold">CCOS</div>
                        <div className="text-sm text-gray-600">Certified Chief of Staff</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Award className="w-8 h-8 text-yellow-600" />
                      <div>
                        <div className="font-bold">PMP®</div>
                        <div className="text-sm text-gray-600">Project Management Professional</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Award className="w-8 h-8 text-yellow-600" />
                      <div>
                        <div className="font-bold">CFE</div>
                        <div className="text-sm text-gray-600">Certified Fraud Examiner</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Award className="w-8 h-8 text-yellow-600" />
                      <div>
                        <div className="font-bold">CSA</div>
                        <div className="text-sm text-gray-600">Certified Scrum Architect</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Leadership Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">People First</h3>
                <p className="text-gray-600">Mentoring teams and building "GRO-Up" engagement initiatives.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Data Driven</h3>
                <p className="text-gray-600">Fact-based decision making using impact analysis models.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Operational Excellence</h3>
                <p className="text-gray-600">Standardizing governance to reduce waste and improve speed.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
