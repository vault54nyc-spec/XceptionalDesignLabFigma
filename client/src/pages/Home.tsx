import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Code, Presentation, Palette, CheckCircle2, ArrowRight, Trophy, Briefcase, Rocket, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          <img src="/images/hero-abstract.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Fortune 500 Operations.
                <br />
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Built for Your Business.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic operations by design. We build the systems, dashboards, and infrastructure that help growing companies scale—with the expertise of a Verizon Chief of Staff and the agility of a specialized partner.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                  Book a Strategy Call
                </Button>
              </Link>
              <Link href="/packages">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 shadow-md">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Credentials Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
                <Building2 className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">Verizon Chief of Staff</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
                <Trophy className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">PMP Certified</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">$2.5M Cost Reductions</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
                <Briefcase className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative">
        <div className="absolute right-0 top-20 w-1/3 h-64 opacity-10 hidden lg:block">
          <img src="/images/workspace-consulting.jpg" alt="" className="w-full h-full object-cover rounded-l-3xl" />
        </div>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Your Company Is Growing.
              <br />
              <span className="text-muted-foreground">Your Operations Aren't.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12">
              You've built something that works. Now you need it to scale. But growth reveals the cracks:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all hover:border-primary/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  No clear processes
                </h3>
                <p className="text-sm text-muted-foreground">Every project feels like starting from scratch</p>
              </Card>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all hover:border-primary/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  Chaotic systems
                </h3>
                <p className="text-sm text-muted-foreground">Spreadsheets everywhere, no real-time visibility</p>
              </Card>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all hover:border-primary/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  Amateur materials
                </h3>
                <p className="text-sm text-muted-foreground">Your presentations don't match your ambitions</p>
              </Card>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all hover:border-primary/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  Budget uncertainty
                </h3>
                <p className="text-sm text-muted-foreground">Spending money without clear ROI tracking</p>
              </Card>
            </div>

            <div className="space-y-4 mb-8 p-6 rounded-lg bg-muted/30 border border-border">
              <p className="text-lg font-semibold text-center">The traditional solutions don't fit:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Full-time Chief of Staff</span> — $200K+ salary for expertise you need 20 hours a week</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Management consultants</span> — expensive decks with no actual execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Design agencies</span> — great at making things pretty, not at operational strategy</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Generic freelancers</span> — execution without strategic thinking</p>
                </div>
              </div>
            </div>

            <p className="text-2xl font-bold text-center text-primary">You need something different.</p>
          </div>
        </div>
      </section>

      {/* The Solution Section with Image */}
      <section className="py-20 px-4 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Strategy + Systems + Execution.
                <br />
                <span className="text-primary">All By Design.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Xceptional Design Lab brings Fortune 500 operational expertise to growing companies. We don't just advise—we build, design, and implement the systems that make your business run better.
              </p>
            </div>

            {/* Dashboard Image */}
            <div className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-border">
              <img src="/images/dashboard-operations.png" alt="Operations Dashboard" className="w-full h-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:border-primary transition-all hover:shadow-xl group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Operations</h3>
                <p className="text-muted-foreground mb-6">
                  We design the governance, processes, and frameworks that turn chaos into clarity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fractional Chief of Staff services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Operational infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Budget planning & financial oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Process optimization</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:border-primary transition-all hover:shadow-xl group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Execution</h3>
                <p className="text-muted-foreground mb-6">
                  We build the dashboards, web apps, and tools that give you real-time visibility and control.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom analytics dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Web application development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Process automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>System integration</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:border-primary transition-all hover:shadow-xl group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <Presentation className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Executive Communications</h3>
                <p className="text-muted-foreground mb-6">
                  We create the presentations, reports, and materials that drive decision-making and secure buy-in.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Board presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Investor decks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Executive reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Brand & marketing design</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img src="/images/team-success.jpg" alt="Team Success" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <img src="/images/boardroom-meeting.jpg" alt="Executive Meeting" className="rounded-xl shadow-2xl" />
              </div>
            </div>

            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto p-6 rounded-lg bg-primary/5 border border-primary/20">
              Most firms offer one or two. We deliver all three—with the strategic thinking of a Chief of Staff, the technical skills of a developer, and the visual excellence of a design studio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We Design <span className="text-primary">For You</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/operations">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all cursor-pointer group h-full hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Operations</h3>
                <p className="text-muted-foreground mb-4">Your fractional Chief of Staff for building scalable operations.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/technical">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all cursor-pointer group h-full hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Solutions</h3>
                <p className="text-muted-foreground mb-4">Custom dashboards, web apps, and automation that give you control.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/communications">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all cursor-pointer group h-full hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Presentation className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Executive Communications</h3>
                <p className="text-muted-foreground mb-4">Board-quality presentations and strategic materials.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>

            <Link href="/design">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all cursor-pointer group h-full hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Brand & Marketing</h3>
                <p className="text-muted-foreground mb-4">Websites, brand systems, and marketing design that elevates your presence.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built on a Foundation of <span className="text-primary">Results</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Enterprise Operations Experience</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">$2.5M</div>
              <p className="text-muted-foreground">Annual Cost Reductions Delivered</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">PMP</div>
              <p className="text-muted-foreground">Certified Project Management Professional</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">F500</div>
              <p className="text-muted-foreground">Fortune 500 Operational Methodologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built For Companies That Are <span className="text-primary">Ready To Scale</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border hover:shadow-xl transition-all hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Individuals & Solopreneurs</h3>
              <p className="text-muted-foreground mb-4">Building your first business systems</p>
              <p className="text-2xl font-bold text-primary mb-4">From $2,500</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-xl transition-all hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Small Businesses</h3>
              <p className="text-muted-foreground mb-4">1-10 employees ready to professionalize</p>
              <p className="text-2xl font-bold text-primary mb-4">From $8,000</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-xl transition-all hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Startups</h3>
              <p className="text-muted-foreground mb-4">Pre-seed to Series B building infrastructure</p>
              <p className="text-2xl font-bold text-primary mb-4">From $15,000</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-xl transition-all hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Services</h3>
              <p className="text-muted-foreground mb-4">Consulting, legal, finance firms elevating operations</p>
              <p className="text-2xl font-bold text-primary mb-4">From $20,000</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Scale With <span className="text-primary">Systems That Work?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free 30-minute strategy call. We'll review your current operations, identify gaps, and show you exactly what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                  Book Your Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 shadow-md">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No obligation consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Clear pricing, no surprises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Work starts only when you're ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
