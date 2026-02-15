import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Xceptional Design Lab | Strategic Operations &amp; Business Design</title>
        <meta
          name="description"
          content="Full-spectrum business operations, strategy, and brand for companies that demand more. 16+ years of Fortune 10 experience across operations, finance, technology, and brand."
        />
        <meta property="og:title" content="Xceptional Design Lab | Strategic Operations & Business Design" />
        <meta
          property="og:description"
          content="Full-spectrum business operations, strategy, and brand for companies that demand more. 16+ years of Fortune 10 experience across operations, finance, technology, and brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xceptional Design Lab | Strategic Operations & Business Design" />
        <meta
          name="twitter:description"
          content="Full-spectrum business operations, strategy, and brand for companies that demand more. 16+ years of Fortune 10 experience across operations, finance, technology, and brand."
        />
        <meta name="twitter:image" content="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White%20(1).svg" />
      </Helmet>
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
