import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, TrendingUp, DollarSign, Target } from "lucide-react";

export default function Operations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Strategic Operations.
              <br />
              <span className="text-primary">Built With Fortune 500 Precision.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get the operational expertise of a Verizon Chief of Staff—without the full-time price tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
