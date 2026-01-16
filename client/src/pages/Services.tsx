import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Palette,
  Globe,
  Lightbulb,
  Settings,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Accessible <span className="text-[#D4AF37]">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fortune 500 expertise designed for growing businesses. Strategic
              services that fit your budget and accelerate your growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Services Built for Growth
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From brand identity to strategic planning, we offer targeted
                services that deliver enterprise-grade results without the
                enterprise price tag.
              </p>
            </div>

            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="design">Design & Brand</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing Support</TabsTrigger>
              </TabsList>

              {/* Design & Brand Services */}
              <TabsContent value="design" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Brand Identity Starter */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Palette className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Brand Identity Starter
                      </CardTitle>
                      <CardDescription className="text-base">
                        Perfect for new businesses establishing their visual
                        identity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $7,500
                        </div>
                        <div className="text-sm text-gray-500">
                          One-time package
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Logo design (3 concepts, 2 revisions)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Brand color palette & typography
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Business card design
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Basic brand guidelines (PDF)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Social media profile templates
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Website Quick Launch */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Website Quick Launch
                      </CardTitle>
                      <CardDescription className="text-base">
                        Get online fast with a professional, mobile-ready site
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $6,500
                        </div>
                        <div className="text-sm text-gray-500">
                          One-time package
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            5-page responsive website
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Mobile-optimized design
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Contact form integration
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Basic SEO setup
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            1 month post-launch support
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pitch Deck Design */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Pitch Deck Design
                      </CardTitle>
                      <CardDescription className="text-base">
                        Investor-ready presentations that tell your story
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $6,000
                        </div>
                        <div className="text-sm text-gray-500">
                          One-time package
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            15-20 slide investor deck
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Executive summary design
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Narrative development & messaging
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            2 revision rounds
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Presentation coaching session
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Strategy Services */}
              <TabsContent value="strategy" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Strategic Planning Session */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Strategic Planning Session
                      </CardTitle>
                      <CardDescription className="text-base">
                        Half-day intensive to clarify direction and priorities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $1,500
                        </div>
                        <div className="text-sm text-gray-500">
                          4-hour session
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            4-hour intensive strategy session
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Current state assessment
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Priority roadmap (90-day plan)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Follow-up summary document
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            2 weeks email support
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Book Session
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Operations Health Check */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Settings className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Operations Health Check
                      </CardTitle>
                      <CardDescription className="text-base">
                        Identify inefficiencies and get actionable improvements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $3,500
                        </div>
                        <div className="text-sm text-gray-500">
                          2-week engagement
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            2-week operational assessment
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Process documentation review
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Efficiency gap analysis
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Quick-win recommendations
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Implementation guide
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Content Strategy Package */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Content Strategy Package
                      </CardTitle>
                      <CardDescription className="text-base">
                        Strategic content planning to amplify your message
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $4,500
                        </div>
                        <div className="text-sm text-gray-500">
                          One-time package
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Audience research & personas
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            3-month content calendar
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Brand voice guidelines
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Content templates (5 types)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Social media strategy
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-black hover:bg-gray-800">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Ongoing Support Services */}
              <TabsContent value="ongoing" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Monthly Advisory Retainer */}
                  <Card className="flex flex-col border-[#D4AF37] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]" />
                    <CardHeader className="pt-8">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <Badge className="w-fit bg-[#D4AF37] text-black hover:bg-[#E8C547] mb-2">
                        Most Popular
                      </Badge>
                      <CardTitle className="text-2xl">
                        Monthly Advisory Retainer
                      </CardTitle>
                      <CardDescription className="text-base">
                        Ongoing strategic support for growing businesses
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $5,000
                          <span className="text-lg text-gray-500 font-normal">
                            /month
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          10 hours monthly
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            10 hours/month strategic advisory
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Monthly planning session
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Email/Slack support
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Quarterly goal setting
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Access to templates & frameworks
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#E8C547] font-bold">
                        Start Retainer
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Hourly Consulting */}
                  <Card className="flex flex-col border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pt-8">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-2xl">
                        Hourly Consulting
                      </CardTitle>
                      <CardDescription className="text-base">
                        Flexible expert advice when you need it
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          $175
                          <span className="text-lg text-gray-500 font-normal">
                            /hour
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          2-hour minimum
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-700">
                          Perfect for quick problem-solving, document reviews,
                          strategy feedback, or process consultation.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-sm">
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            Ideal for:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                One-off strategic questions
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                Document or proposal review
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                Process optimization advice
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                Crisis response guidance
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-black hover:bg-black hover:text-white"
                      >
                        Book Hours
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 px-4 bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Enterprise Expertise
                </h3>
                <p className="text-gray-600">
                  Fortune 500-level strategic thinking and execution, adapted
                  for growing businesses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accessible Pricing</h3>
                <p className="text-gray-600">
                  Premium services at rates designed for startups and small
                  businesses ready to scale.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Flexible Engagement</h3>
                <p className="text-gray-600">
                  From one-time projects to ongoing partnerships, we meet you
                  where you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="bg-black text-white p-12 rounded-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Special Offers
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">
                      10% Nonprofit Discount
                    </p>
                    <p className="text-gray-300">
                      Supporting mission-driven organizations with reduced rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">
                      15% Repeat Client Discount
                    </p>
                    <p className="text-gray-300">
                      Loyalty rewards for ongoing partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">
                      Payment Plans Available
                    </p>
                    <p className="text-gray-300">
                      50% deposit, 50% on completion for packages over $5,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-white text-center">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which service best fits your needs and goals. Book a
              free 30-minute consultation to explore how we can help.
            </p>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8"
            >
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
