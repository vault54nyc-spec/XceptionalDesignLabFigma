import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Briefcase, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Torn Paper Effect */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          {/* Torn Paper Background */}
          <div className="absolute inset-0">
            <img 
              src="/torn-paper-bg.png" 
              alt="" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          
          {/* Dotted Pattern Accents */}
          <div className="absolute top-20 left-20 w-32 h-32 opacity-30">
            <div className="grid grid-cols-8 gap-2">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-20 right-20 w-32 h-32 opacity-30">
            <div className="grid grid-cols-8 gap-2">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Logo and Tagline */}
          <div className="relative z-10 text-center px-4">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                Xceptional
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                DesignLab
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Fortune 500 Operations. Built for Your Business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-lg">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Credentials Bar */}
        <section className="py-8 px-4 bg-gray-100 border-y border-gray-200">
          <div className="container max-w-6xl">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                <span>Verizon Chief of Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                <span>PMP® Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                <span>$2.5M Cost Reductions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-32 px-4 bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/dashboard-analytics.jpg" 
                  alt="Strategic Operations" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Multi-Disciplinary <span className="text-yellow-600">Executive</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  A Multi-Disciplinary Executive with over 15 years of experience traversing the worlds of 
                  high-stakes corporate strategy, creative media production, and technical innovation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Not defined by a single lane: <strong>Chief of Staff</strong>, <strong>Project Management Professional</strong>, 
                  <strong> Crisis Manager</strong>, and <strong>Creative Director</strong> rolled into one.
                </p>
                <Button size="lg" variant="outline" className="border-2 border-black hover:bg-black hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Numbered Layout */}
        <section className="py-32 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
              Our <span className="text-yellow-500">Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column - Image */}
              <div className="space-y-8">
                <img 
                  src="/handshake-business.jpg" 
                  alt="Strategic Operations" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              {/* Right Column - Services */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">01</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Strategic Operations</h3>
                      <p className="text-gray-300">
                        Fortune 500-caliber operational leadership from crisis management to strategic planning
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">02</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Technical Solutions</h3>
                      <p className="text-gray-300">
                        Custom dashboards, automation, and technical infrastructure that scales
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">03</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Executive Communications</h3>
                      <p className="text-gray-300">
                        Strategic messaging, presentations, and executive-level content creation
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">04</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Design & Brand</h3>
                      <p className="text-gray-300">
                        Graphic design, media production, and brand identity development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Services */}
            <div className="grid md:grid-cols-2 gap-16 mt-16">
              <div className="space-y-12">
                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">05</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Financial Operations</h3>
                      <p className="text-gray-300">
                        Budget management, cost optimization, and financial integrity (CFE certified)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-yellow-500">06</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Crisis Management</h3>
                      <p className="text-gray-300">
                        Disaster relief operations and rapid response frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img 
                  src="/team-collaboration.jpg" 
                  alt="Team Collaboration" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-yellow-600 mb-4">$2.5M+</div>
                <div className="text-lg text-gray-700">Cost Reductions Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-600 mb-4">15+</div>
                <div className="text-lg text-gray-700">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-600 mb-4">500+</div>
                <div className="text-lg text-gray-700">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-600 mb-4">98%</div>
                <div className="text-lg text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Roster Section */}
        <section className="py-32 px-4 bg-white">
          <div className="container max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Client Roster</h2>
            <p className="text-lg text-gray-700 mb-16 max-w-3xl">
              From our early days, we've been providing reliable service to our clientele. 
              We've had the honor of being the firm of choice of the following corporations:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Global Solutions", img: "/team-meeting-1.jpg" },
                { name: "Agile Tech", img: "/team-meeting-2.jpg" },
                { name: "Innovation Company", img: "/boardroom-meeting.jpg" },
                { name: "Savvy Bank", img: "/team-success.jpg" },
                { name: "Dynamic Digital", img: "/team-collaboration.jpg" },
                { name: "Key Securities", img: "/team-meeting-1.jpg" }
              ].map((client, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={client.img} 
                    alt={client.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 mt-16 text-center">
              We value the unique backgrounds, experiences, and contributions that each 
              client brings to our community and encourage and celebrate diversity.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4 bg-gray-50">
          <div className="container max-w-4xl text-center">
            <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              "Operations is our expertise. We'll take care of it, so you can focus on yours."
            </blockquote>
            <p className="text-xl text-gray-600">Christopher Henry, Principal</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4 bg-black text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's work <span className="text-yellow-500">together.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to scale with systems that work? Book a strategy call today.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
