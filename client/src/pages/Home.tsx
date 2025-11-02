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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Fortune 500 Operations.
                <br />
                <span className="text-primary">Built for Your Business.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic operations by design. We build the systems, dashboards, and infrastructure that help growing companies scale—with the expertise of a Verizon Chief of Staff and the agility of a specialized partner.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Book a Strategy Call
                </Button>
              </Link>
              <Link href="/packages">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Credentials Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="space-y-2">
                <Building2 className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">Verizon Chief of Staff</p>
              </div>
              <div className="space-y-2">
                <Trophy className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">PMP Certified</p>
              </div>
              <div className="space-y-2">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">$2.5M Cost Reductions</p>
              </div>
              <div className="space-y-2">
                <Briefcase className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-semibold">15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 px-4 bg-card">
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
              <Card className="p-6 bg-background border-border">
                <h3 className="font-semibold mb-2">No clear processes</h3>
                <p className="text-sm text-muted-foreground">Every project feels like starting from scratch</p>
              </Card>
              <Card className="p-6 bg-background border-border">
                <h3 className="font-semibold mb-2">Chaotic systems</h3>
                <p className="text-sm text-muted-foreground">Spreadsheets everywhere, no real-time visibility</p>
              </Card>
              <Card className="p-6 bg-background border-border">
                <h3 className="font-semibold mb-2">Amateur materials</h3>
                <p className="text-sm text-muted-foreground">Your presentations don't match your ambitions</p>
              </Card>
              <Card className="p-6 bg-background border-border">
                <h3 className="font-semibold mb-2">Budget uncertainty</h3>
                <p className="text-sm text-muted-foreground">Spending money without clear ROI tracking</p>
              </Card>
            </div>

            <div className="space-y-4 mb-8">
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

      {/* The Solution Section */}
      <section className="py-20 px-4">
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

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Operations</h3>
                <p className="text-muted-foreground mb-6">
                  We design the governance, processes, and frameworks that turn chaos into clarity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fractional Chief of Staff services</li>
                  <li>• Operational infrastructure</li>
                  <li>• Budget planning & financial oversight</li>
                  <li>• Process optimization</li>
                  <li>• Crisis management</li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Execution</h3>
                <p className="text-muted-foreground mb-6">
                  We build the dashboards, web apps, and tools that give you real-time visibility and control.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom analytics dashboards</li>
                  <li>• Web application development</li>
                  <li>• Process automation</li>
                  <li>• Microsite development</li>
                  <li>• System integration</li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Presentation className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Executive Communications</h3>
                <p className="text-muted-foreground mb-6">
                  We create the presentations, reports, and materials that drive decision-making and secure buy-in.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Board presentations</li>
                  <li>• Investor decks</li>
                  <li>• Executive reports</li>
                  <li>• Strategic planning documents</li>
                  <li>• Brand & marketing design</li>
                </ul>
              </Card>
            </div>

            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
              Most firms offer one or two. We deliver all three—with the strategic thinking of a Chief of Staff, the technical skills of a developer, and the visual excellence of a design studio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We Design <span className="text-primary">For You</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/operations">
              <Card className="p-6 bg-background border-border hover:border-primary transition-all cursor-pointer group h-full">
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Strategic Operations</h3>
                <p className="text-muted-foreground mb-4">Your fractional Chief of Staff for building scalable operations.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link href="/technical">
              <Card className="p-6 bg-background border-border hover:border-primary transition-all cursor-pointer group h-full">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Technical Solutions</h3>
                <p className="text-muted-foreground mb-4">Custom dashboards, web apps, and automation that give you control.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link href="/communications">
              <Card className="p-6 bg-background border-border hover:border-primary transition-all cursor-pointer group h-full">
                <Presentation className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Executive Communications</h3>
                <p className="text-muted-foreground mb-4">Board-quality presentations and strategic materials.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link href="/design">
              <Card className="p-6 bg-background border-border hover:border-primary transition-all cursor-pointer group h-full">
                <Palette className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Brand & Marketing</h3>
                <p className="text-muted-foreground mb-4">Websites, brand systems, and marketing design that elevates your presence.</p>
                <span className="text-primary group-hover:underline flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 px-4">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built on a Foundation of <span className="text-primary">Results</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Enterprise Operations Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$2.5M</div>
              <p className="text-muted-foreground">Annual Cost Reductions Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">PMP</div>
              <p className="text-muted-foreground">Certified Project Management Professional</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">F500</div>
              <p className="text-muted-foreground">Fortune 500 Operational Methodologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built For Companies That Are <span className="text-primary">Ready To Scale</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-background border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Individuals & Solopreneurs</h3>
              <p className="text-muted-foreground mb-4">Building your first business systems</p>
              <p className="text-2xl font-bold text-primary mb-4">From $2,500</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-background border-border">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Small Businesses</h3>
              <p className="text-muted-foreground mb-4">1-10 employees ready to professionalize</p>
              <p className="text-2xl font-bold text-primary mb-4">From $8,000</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-background border-border">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Startups</h3>
              <p className="text-muted-foreground mb-4">Pre-seed to Series B building infrastructure</p>
              <p className="text-2xl font-bold text-primary mb-4">From $15,000</p>
              <Link href="/packages">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Packages →
                </Button>
              </Link>
            </Card>

            <Card className="p-6 bg-background border-border">
              <Building2 className="w-12 h-12 text-primary mb-4" />
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
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Scale With <span className="text-primary">Systems That Work?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free 30-minute strategy call. We'll review your current operations, identify gaps, and show you exactly what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Book Your Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
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
