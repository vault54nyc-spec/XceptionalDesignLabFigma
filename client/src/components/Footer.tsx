import { Link } from "wouter";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-black mb-4">
              Xceptional <span className="text-[#D4AF37]">Design Lab</span>
            </h3>
            <p className="text-sm text-[#666666] mb-4">
              Strategic operations by design. Fortune 500 expertise for growing companies.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@xceptionaldesignlab.com" className="text-black hover:text-[#D4AF37] transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#D4AF37] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/operations">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Strategic Operations
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/technical">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Technical Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/communications">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Executive Communications
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/design">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Brand & Marketing
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/packages">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Packages
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-[#666666] hover:text-[#D4AF37] transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4 tracking-wide">GET IN TOUCH</h4>
            <p className="text-sm text-[#666666] mb-2">
              Ready to scale your operations?
            </p>
            <Link href="/contact">
              <span className="text-sm text-[#D4AF37] hover:text-black font-semibold cursor-pointer border-b border-[#D4AF37] pb-1 inline-block transition-colors">
                Book a Strategy Call →
              </span>
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] mt-8 pt-8 text-center">
          <p className="text-sm text-[#666666]">
            © {new Date().getFullYear()} Xceptional Design Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
