import { Link } from "react-router";
import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  return (
    <footer className="relative py-16 px-8 md:px-12 lg:px-16 border-t border-[#D4AF37]/20">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div className="md:col-span-1">
              <img
                src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White.svg"
                alt="Xceptional Design Lab"
                className="h-12 w-auto mb-4"
                style={{
                  filter:
                    "drop-shadow(0 0 15px rgba(212, 175, 55, 0.5)) drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))",
                }}
              />
              <p className="text-[#D0D0D0] leading-relaxed mb-4">
                Full-spectrum business operations, strategy, and brand for
                companies that demand more. 16+ years of Fortune 10 experience
                distilled into every engagement.
              </p>
              <p className="text-sm text-[#D4AF37] tracking-wide">
                Est. 2025 | New York Metropolitan Area
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-[#F5E6B8] font-medium mb-4 uppercase tracking-wide text-sm">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services/brand-identity"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Brand & Communications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/digital-platforms"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Digital Platforms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/operational-design"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Operations & Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/strategic-consulting"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/communications"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Communications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/technical-services"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Technical Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-[#F5E6B8] font-medium mb-4 uppercase tracking-wide text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    About & Credentials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Projects & Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Full Service Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lightening-fast-services"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Lightening Fast Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[#D0D0D0] hover:text-[#D4AF37] transition-colors"
                  >
                    Book a Strategy Call
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-[#F5E6B8] font-medium mb-4 uppercase tracking-wide text-sm">
                Get In Touch
              </h4>
              <ul className="space-y-4 text-[#D0D0D0]">
                {/* Phone */}
                <li className="flex items-center gap-3">
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/3.png"
                    alt="Phone"
                    className="h-5 w-5 opacity-80"
                  />
                  <a
                    href="tel:+15516559184"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    551.655.9184
                  </a>
                </li>
                {/* Email */}
                <li className="flex items-center gap-3">
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/MAIL.png"
                    alt="Email"
                    className="h-5 w-5 opacity-80"
                  />
                  <a
                    href="mailto:xceptional.designlab@gmail.com"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    xceptional.designlab@gmail.com
                  </a>
                </li>
                {/* Instagram */}
                <li className="flex items-center gap-3">
                  <img
                    src="https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/IG.png"
                    alt="Instagram"
                    className="h-5 w-5 opacity-80"
                  />
                  <a
                    href="https://instagram.com/X.Design.Lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    @X.Design.Lab
                  </a>
                </li>
                <li>New York Metropolitan Area</li>
                <li>
                  <a
                    href="https://xdesignlabs.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    xdesignlabs.co
                  </a>
                </li>
              </ul>

              {/* Credentials */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                <p className="text-xs text-[#D4AF37] tracking-wide">
                  PMP® · CCOS · CFE
                </p>
                <p className="text-xs text-[#D0D0D0] mt-1">
                  16+ Years Enterprise Experience
                </p>
              </div>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="gold-divider mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#D0D0D0]">
              © 2025 Xceptional Design Lab. All rights reserved. | Urbane Elite
              Holdings Portfolio
            </p>
            <div className="flex gap-6 text-sm text-[#D0D0D0]">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}