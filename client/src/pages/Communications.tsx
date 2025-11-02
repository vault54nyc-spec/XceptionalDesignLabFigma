import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Communications() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Communications <span className="text-primary">Page</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Content coming soon
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
