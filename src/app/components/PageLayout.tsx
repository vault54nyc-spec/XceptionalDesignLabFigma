import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop, BackToTopButton } from "./ScrollToTop";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative z-10">
      <ScrollToTop />
      <Navigation />
      {children}
      <Footer />
      <BackToTopButton />
    </div>
  );
}
