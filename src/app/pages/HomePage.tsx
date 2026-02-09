import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { PositioningSection } from "../components/PositioningSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { ProcessSection } from "../components/ProcessSection";
import { ResultsSection } from "../components/ResultsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { PackagesSection } from "../components/PackagesSection";
import { BookCallSection } from "../components/BookCallSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <PositioningSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PackagesSection />
      <BookCallSection />
    </PageLayout>
  );
}
