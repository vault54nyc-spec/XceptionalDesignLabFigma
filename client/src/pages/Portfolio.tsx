import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Portfolio Categories
const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "strategy", label: "Strategic Comm" },
  { id: "brand", label: "Brand Identity" },
  { id: "community", label: "Community & Impact" },
  { id: "digital", label: "Social & Digital" },
];

// Portfolio Items (Sanitized for sensitivity)
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Enterprise Value Strategy",
    category: "strategy",
    image: "/portfolio/strategy-deck.jpg", // Placeholder
    description: "Comprehensive value realization framework for FY26 planning cycles.",
    tags: ["Strategy", "Presentation", "Data Viz"],
    isPrivate: true
  },
  {
    id: 2,
    title: "NPHC Brand Identity",
    category: "brand",
    image: "/portfolio/nphc-logo.jpg", // Placeholder
    description: "Modern logo design and visual identity system for community organization.",
    tags: ["Logo Design", "Branding", "Vector"],
    isPrivate: false
  },
  {
    id: 3,
    title: "Expense Process Infographic",
    category: "strategy",
    image: "/portfolio/process-infographic.jpg", // Placeholder
    description: "Streamlined visual guide for complex internal reimbursement procedures.",
    tags: ["Infographic", "Process Map", "Internal Comm"],
    isPrivate: true
  },
  {
    id: 4,
    title: "MLK Day of Service",
    category: "community",
    image: "/portfolio/mlk-flyer.jpg", // Placeholder
    description: "Event campaign materials driving community engagement and volunteerism.",
    tags: ["Event Design", "Print", "Campaign"],
    isPrivate: false
  },
  {
    id: 5,
    title: "Neon Beat Night",
    category: "brand",
    image: "/portfolio/neon-logo.jpg", // Placeholder
    description: "Vibrant, high-energy logo design for entertainment event series.",
    tags: ["Logo", "Typography", "Event Branding"],
    isPrivate: false
  },
  {
    id: 6,
    title: "Fundraiser Impact Report",
    category: "community",
    image: "/portfolio/impact-report.jpg", // Placeholder
    description: "Data-rich annual report highlighting fundraising metrics and outcomes.",
    tags: ["Report Design", "Data Viz", "Layout"],
    isPrivate: false
  },
  {
    id: 7,
    title: "Social Media Intake System",
    category: "digital",
    image: "/portfolio/social-form.jpg", // Placeholder
    description: "UX-focused intake form design to streamline content requests.",
    tags: ["UX/UI", "Form Design", "Workflow"],
    isPrivate: false
  },
  {
    id: 8,
    title: "Rio NYE Adventure",
    category: "digital",
    image: "/portfolio/rio-social.jpg", // Placeholder
    description: "Dynamic social media assets for destination event promotion.",
    tags: ["Social Media", "Digital Ad", "Motion"],
    isPrivate: false
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Selected <span className="text-yellow-500">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              A curated collection of strategic communications, brand identity, and digital experiences. 
              Bridging the gap between executive strategy and creative execution.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 
                    ${activeCategory === cat.id 
                      ? "bg-black text-white shadow-lg scale-105" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-lg">
                      {item.title} Preview
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        {CATEGORIES.find(c => c.id === item.category)?.label}
                      </Badge>
                      {item.isPrivate && (
                        <div className="flex items-center text-xs text-gray-500" title="Sensitive details redacted">
                          <Lock className="w-3 h-3 mr-1" />
                          Confidential
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-400 font-medium">#{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gray-50 text-center">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See something you like?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it's a full brand overhaul or a critical executive presentation, 
              we bring the same level of precision to every project.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
