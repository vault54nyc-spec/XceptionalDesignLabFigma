import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Award, DollarSign, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        {/* Hero Content */}
        <div className="container relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Fortune 500 Operations.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-700">
              Built for Your Business.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto font-light leading-relaxed text-gray-200">
            Complete end-to-end operational solutions for growing companies. From governance to websites, from budgets to creative problem-solving—we handle everything you need to scale.
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Led by a Verizon Chief of Staff with 15+ years across operations, finance, technology, and design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-semibold px-12 py-6 text-lg rounded-none"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-12 py-6 text-lg rounded-none bg-transparent"
            >
              See What We Handle
            </Button>
          </div>
          
          {/* Credentials Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-white/20">
            <div className="flex flex-col items-center text-center">
              <Building2 className="w-8 h-8 text-red-900 mb-2" />
              <div className="text-sm font-semibold">Verizon Chief of Staff</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-red-900 mb-2" />
              <div className="text-sm font-semibold">PMP | CFE | Certified CoS</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <DollarSign className="w-8 h-8 text-red-900 mb-2" />
              <div className="text-sm font-semibold">$2.5M+ Cost Reductions</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-red-900 mb-2" />
              <div className="text-sm font-semibold">15+ Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
              Your Business Needs More Than <span className="text-red-900">Specialists</span>
            </h2>
            
            <div className="text-xl text-gray-700 space-y-6 mb-12">
              <p className="leading-relaxed">
                Most agencies and consultants are specialists:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3">•</span>
                  <span>Strategy consultants who don't execute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3">•</span>
                  <span>Developers who don't understand business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3">•</span>
                  <span>Designers who don't think strategically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3">•</span>
                  <span>Fractional executives who delegate everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3">•</span>
                  <span>Operations experts who can't build technology</span>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white p-12 mb-12">
              <p className="text-2xl md:text-3xl font-bold mb-8 text-center">
                But your business doesn't work in silos.
              </p>
              <p className="text-xl mb-6">You need someone who can:</p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Design your governance structure AND document your processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Build your financial models AND create your budget dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Set up your project management AND execute the projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Plan your website strategy AND actually build the site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Create operational frameworks AND implement them</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Solve creative problems AND make them real</span>
                </li>
              </ul>
            </div>

            <p className="text-3xl font-bold text-center">
              You need <span className="text-red-900">complete operational solutions</span>. Not piecemeal services.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution - Seven Service Pillars */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              One Partner. <span className="text-red-900">Every Operational Need.</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Xceptional Design Lab is your complete operational partner—handling everything your business needs to run, scale, and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Governance & Administration</h3>
              <p className="text-gray-600 leading-relaxed">
                Organizational structure, decision frameworks, meeting architecture, policies, compliance, risk management
              </p>
            </Card>

            {/* Pillar 2 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Management & Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Project management, process optimization, performance tracking, continuous improvement, execution
              </p>
            </Card>

            {/* Pillar 3 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Documentation & Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                SOPs, process documentation, training materials, knowledge bases, operational playbooks
              </p>
            </Card>

            {/* Pillar 4 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Financial Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Budget planning, expense tracking, financial dashboards, ROI analysis, forecasting, cost optimization
              </p>
            </Card>

            {/* Pillar 5 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Technology Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom dashboards, web applications, microsites, process automation, system integration
              </p>
            </Card>

            {/* Pillar 6 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Creative & Brand</h3>
              <p className="text-gray-600 leading-relaxed">
                Website design, brand identity, marketing collateral, executive presentations, visual communications
              </p>
            </Card>

            {/* Pillar 7 */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group md:col-span-2 lg:col-span-1 mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Creative Problem Solving</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic challenges, operational bottlenecks, unique business problems—whatever comes up
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-semibold px-12 py-6 text-lg rounded-none"
            >
              Learn About Complete Solutions
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Comparison */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="container max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Most Companies Need To <span className="text-red-900">Hire:</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Traditional Approach */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-400">Traditional Approach</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Chief of Staff</span>
                  <span className="font-bold">$200K+/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Project Manager</span>
                  <span className="font-bold">$90K+/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Business Analyst</span>
                  <span className="font-bold">$80K+/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Web Developer</span>
                  <span className="font-bold">$100K+/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Designer</span>
                  <span className="font-bold">$70K+/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Consultants</span>
                  <span className="font-bold">$150K+/year</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-2xl font-bold text-red-500">
                  <span>Total:</span>
                  <span>$690K+ annually</span>
                </div>
              </div>
            </div>

            {/* Xceptional Approach */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-10 border-2 border-red-900">
              <h3 className="text-3xl font-bold mb-8 text-red-900">Xceptional Approach</h3>
              <div className="space-y-6 text-lg mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>One integrated partner</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>All expertise included</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Fortune 500 quality</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Startup-friendly pricing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>No coordination overhead</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-900 mr-3 flex-shrink-0 mt-1" />
                  <span>Complete accountability</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-center pt-6 border-t border-red-900">
                Starting at <span className="text-red-900">$8,000/month</span>
                <div className="text-lg font-normal text-gray-300 mt-2">or project-based</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-12 py-6 text-lg rounded-none bg-transparent"
            >
              View Packages
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Xceptional Difference */}
      <section className="py-32 px-4 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Why <span className="text-red-900">Xceptional Design Lab?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 bg-gray-50 border-0 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-red-900">Fortune 500 Expertise</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Verizon-proven methodologies managing multi-million dollar operations. Not theory—systems that have worked at scale.
              </p>
            </Card>

            <Card className="p-10 bg-gray-50 border-0 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-red-900">Complete Capability</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                We don't just advise. We build dashboards, design presentations, implement processes, train teams, and execute strategy.
              </p>
            </Card>

            <Card className="p-10 bg-gray-50 border-0 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-red-900">Integrated Thinking</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Unlike specialists who optimize their piece, we optimize the whole system. Everything works together.
              </p>
            </Card>

            <Card className="p-10 bg-gray-50 border-0 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-red-900">Right-Sized Pricing</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Enterprise-grade work without enterprise overhead. Get Fortune 500 quality at prices that make sense for your stage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img 
            src="/images/geometric-pattern-anim.gif" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Built on a Foundation of <span className="text-red-900">Results</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-900 mb-4">15+</div>
              <div className="text-xl text-gray-300">Enterprise Operations Experience</div>
            </div>

            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-900 mb-4">$2.5M+</div>
              <div className="text-xl text-gray-300">Annual Cost Reductions Delivered</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-900 mb-4">PMP | CFE</div>
              <div className="text-xl text-gray-300">Triple Fortune 500 Certified</div>
            </div>

            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-red-900 mb-4">Any</div>
              <div className="text-xl text-gray-300">Cross-Functional Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 px-4 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            Solutions for <span className="text-red-900">Every Stage</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-20">
            We partner with ambitious organizations ready to transform their operations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Individuals & Solopreneurs */}
            <Card className="p-8 bg-gray-50 border-2 border-gray-200 hover:border-red-900 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Individuals & Solopreneurs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Building your first business systems
              </p>
              <div className="text-3xl font-bold text-red-900 mb-6">
                Starting from: $2,500
              </div>
              <Button 
                variant="outline" 
                className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white rounded-none"
              >
                View Solutions →
              </Button>
            </Card>

            {/* Small Businesses */}
            <Card className="p-8 bg-gray-50 border-2 border-gray-200 hover:border-red-900 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Small Businesses (1-10)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to professionalize operations
              </p>
              <div className="text-3xl font-bold text-red-900 mb-6">
                Starting from: $8,000
              </div>
              <Button 
                variant="outline" 
                className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white rounded-none"
              >
                View Solutions →
              </Button>
            </Card>

            {/* Startups */}
            <Card className="p-8 bg-gray-50 border-2 border-gray-200 hover:border-red-900 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Startups (Funded)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Building infrastructure post-funding
              </p>
              <div className="text-3xl font-bold text-red-900 mb-6">
                Starting from: $25,000
              </div>
              <Button 
                variant="outline" 
                className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white rounded-none"
              >
                View Solutions →
              </Button>
            </Card>

            {/* Growing Companies */}
            <Card className="p-8 bg-gray-50 border-2 border-gray-200 hover:border-red-900 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-900 transition-colors">Growing Companies</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need complete operations partner
              </p>
              <div className="text-3xl font-bold text-red-900 mb-6">
                Starting from: $12K/mo
              </div>
              <Button 
                variant="outline" 
                className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white rounded-none"
              >
                View Solutions →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="container max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            Complete Solutions, <span className="text-red-900">Not Piecemeal Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-20">
            Comprehensive packages designed for your specific needs
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Package 1 */}
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2">The Foundation Builder</h3>
              <div className="text-2xl font-bold text-red-900 mb-2">$25,000</div>
              <div className="text-gray-600 mb-6">8 weeks</div>
              <p className="text-lg text-gray-700 mb-8 italic">For startups that just raised funding</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Complete operational framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Financial system & dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Corporate website</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Brand guidelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Presentation templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>3 months advisory</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white rounded-none">
                Learn More →
              </Button>
            </Card>

            {/* Package 2 - Featured */}
            <Card className="p-10 bg-gradient-to-br from-red-900 to-red-800 text-white border-0 shadow-2xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold mb-2 mt-6">The Operations Department</h3>
              <div className="text-2xl font-bold mb-2">$12K-$25K/month</div>
              <div className="text-red-200 mb-6">Ongoing</div>
              <p className="text-lg mb-8 italic">Your outsourced operations function</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>Fractional Chief of Staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>All operational execution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>Technical development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>Creative production</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>Complete flexibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <span>One point of contact</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-red-900 hover:bg-gray-100 rounded-none font-bold">
                Learn More →
              </Button>
            </Card>

            {/* Package 3 */}
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2">The Executive Accelerator</h3>
              <div className="text-2xl font-bold text-red-900 mb-2">$15,000</div>
              <div className="text-gray-600 mb-6">4 weeks + 3 months</div>
              <p className="text-lg text-gray-700 mb-8 italic">For new executives in first 90 days</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>30/60/90 day plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Governance framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Financial dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Presentation templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>Action tracking system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-900 mr-2 flex-shrink-0 mt-1" />
                  <span>12 hrs monthly consulting</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white rounded-none">
                Learn More →
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-semibold px-12 py-6 text-lg rounded-none"
            >
              View All Packages
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="container max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Results That <span className="text-red-900">Speak For Themselves</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Placeholder */}
            <Card className="p-8 bg-gray-900 border-gray-800 text-white">
              <div className="text-6xl mb-4">"</div>
              <p className="text-lg mb-6 leading-relaxed italic">
                [Testimonial quote about impact and results will be added here]
              </p>
              <div className="font-bold">Name, Title</div>
              <div className="text-gray-400">Company Name</div>
            </Card>

            {/* Testimonial 2 - Placeholder */}
            <Card className="p-8 bg-gray-900 border-gray-800 text-white">
              <div className="text-6xl mb-4">"</div>
              <p className="text-lg mb-6 leading-relaxed italic">
                [Testimonial quote about impact and results will be added here]
              </p>
              <div className="font-bold">Name, Title</div>
              <div className="text-gray-400">Company Name</div>
            </Card>

            {/* Testimonial 3 - Placeholder */}
            <Card className="p-8 bg-gray-900 border-gray-800 text-white">
              <div className="text-6xl mb-4">"</div>
              <p className="text-lg mb-6 leading-relaxed italic">
                [Testimonial quote about impact and results will be added here]
              </p>
              <div className="font-bold">Name, Title</div>
              <div className="text-gray-400">Company Name</div>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-32 px-4 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            How We <span className="text-red-900">Work</span>
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-red-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Discovery <span className="text-red-900">| Week 1</span></h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We audit current state, interview stakeholders, identify priorities
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-red-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Strategy <span className="text-red-900">| Week 2</span></h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We design frameworks, systems, and approaches that drive results
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-red-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Build <span className="text-red-900">| Weeks 3-4</span></h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We develop dashboards, create presentations, document processes, build solutions
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-red-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Implementation <span className="text-red-900">| Weeks 5-6</span></h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We roll out, train teams, ensure successful adoption
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-red-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Optimization <span className="text-red-900">| Ongoing</span></h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We provide strategic counsel, refine systems, drive continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated cube in background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <img 
            src="/images/geometric-cube-anim.gif" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready To Scale With <span className="text-red-900">Systems That Work?</span>
          </h2>
          <p className="text-2xl mb-12 text-gray-300 leading-relaxed">
            Book a free 30-minute strategy call. We'll review your current operations, identify gaps, and show you exactly what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-semibold px-16 py-8 text-xl rounded-none"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-16 py-8 text-xl rounded-none bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg text-gray-300">
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-red-900 mr-2" />
              <span>No obligation consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-red-900 mr-2" />
              <span>Clear pricing, no surprises</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-red-900 mr-2" />
              <span>Work starts only when you're ready</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
