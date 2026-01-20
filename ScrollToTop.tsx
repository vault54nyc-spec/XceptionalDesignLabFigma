import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop Component
 * 
 * Fixes the issue where clicking navigation links takes you to the bottom of the page.
 * This component scrolls to the top of the page whenever the route changes.
 * 
 * Usage: Add <ScrollToTop /> inside your App component, before the Router.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
