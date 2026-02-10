import { Helmet } from "react-helmet-async";
import { PageLayout } from "../components/PageLayout";
import { useServicesCart } from "../context/ServicesCartContext";
import { AnimatedSection } from "../components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

// ============================================
// RESEND EMAIL — SECURE SERVER-SIDE INTEGRATION
// Emails are sent via the Supabase Edge Function
// at /make-server-7d38c017/send-email which keeps
// the Resend API key secure on the server.
// ============================================
const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-7d38c017`;

async function sendConsultationRequest(payload: {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  budget: string;
  timeline: string;
  services: { name: string; category: string }[];
}) {
  const response = await fetch(`${API_BASE}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${publicAnonKey}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Email API error:", result);
    throw new Error(result.error || "Failed to send consultation request.");
  }

  console.log("Consultation request sent successfully:", result);
  return result;
}

export function ContactPage() {
  const { selectedServices, removeService, clearCart } = useServicesCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendConsultationRequest({
        ...formData,
        services: selectedServices.map((s) => ({
          name: s.name,
          category: s.category,
        })),
      });

      toast.success("Message sent! We'll be in touch within 24 hours.", {
        style: {
          background: "#0A0A0A",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#FAFAFA",
        },
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
        budget: "",
        timeline: "",
      });
      setUploadedFiles([]);
      clearCart();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.", {
        style: {
          background: "#0A0A0A",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#FAFAFA",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const inputClasses =
    "w-full glass rounded-lg px-4 py-3 text-[#FAFAFA] placeholder-[#A0A0A0] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none transition-colors bg-transparent";

  return (
    <PageLayout>
      <Helmet>
        <title>Contact Xceptional Design Lab</title>
        <meta
          name="description"
          content="Get in touch with Xceptional Design Lab for strategic design and digital infrastructure services. Contact us today to discuss your project needs."
        />
      </Helmet>
      <div className="min-h-screen pt-32">
        <section className="relative py-24 md:py-32 px-8 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <AnimatedSection>
              <div className="mb-8">
                <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium">
                  LET'S CONNECT
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] leading-[0.95] tracking-tight mb-8">
                THE NEXT MOVE{" "}
                <span className="text-gold-gradient text-glow">
                  IS YOURS.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-4xl mb-16">
                Whether you need a full brand system, a website that actually
                converts, or operational infrastructure that doesn't break —
                it starts with a conversation.
              </p>
            </AnimatedSection>

            {submitted ? (
              <AnimatedSection>
                <div className="floating-card rounded-3xl p-8 md:p-16 max-w-3xl mx-auto text-center border-2 border-[#D4AF37]/30">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                    <svg
                      className="w-10 h-10 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                    MESSAGE RECEIVED.
                  </h2>
                  <p className="text-xl text-[#A0A0A0] leading-relaxed mb-4">
                    We'll review your request and respond within 24 hours.
                    Check your inbox for a confirmation email.
                  </p>
                  <p className="text-sm text-[#D4AF37]">
                    A copy has been sent to {formData.email || "your email"}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 floating-card rounded-full px-8 py-3 text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Left Column - Contact Info (2 cols) */}
                <AnimatedSection delay={0.1} direction="left" className="lg:col-span-2">
                  <div className="floating-card rounded-3xl p-6 md:p-8 space-y-8 h-full">
                    <div>
                      <h2 className="text-2xl font-bold text-[#FAFAFA] mb-2">
                        XCEPTIONAL DESIGN LAB
                      </h2>
                      <p className="text-[#A0A0A0]">
                        Strategic Design & Digital Infrastructure
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-0.5">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <span className="text-[#A0A0A0]">
                          New York Metropolitan Area
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-0.5">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <a
                          href="mailto:xceptional.designlab@gmail.com"
                          className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                        >
                          xceptional.designlab@gmail.com
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-0.5">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </span>
                        <span className="text-[#A0A0A0]">xdesignlabs.co</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#D4AF37]/30">
                      <h3 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                        RESPONSE TIME
                      </h3>
                      <p className="text-[#A0A0A0] leading-relaxed">
                        Strategy call requests are typically confirmed within 24
                        hours. Urgent inquiries flagged in your message will be
                        prioritized.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#D4AF37]/30">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gold-gradient">
                            16+
                          </div>
                          <p className="text-[#A0A0A0] text-xs mt-1">
                            YEARS EXP.
                          </p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gold-gradient">
                            61
                          </div>
                          <p className="text-[#A0A0A0] text-xs mt-1">SERVICES</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gold-gradient">
                            3
                          </div>
                          <p className="text-[#A0A0A0] text-xs mt-1">CERTS</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#D4AF37]/30">
                      <h3 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-medium mb-4">
                        SOCIAL
                      </h3>
                      <div className="flex gap-6">
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://behance.net"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                        >
                          Behance
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Right Column - Contact Form (3 cols) */}
                <AnimatedSection delay={0.2} direction="right" className="lg:col-span-3">
                  <div className="floating-card rounded-3xl p-6 md:p-8">
                    {/* Selected Services Display */}
                    {selectedServices.length > 0 && (
                      <div className="mb-8 p-6 rounded-xl bg-[rgba(212,175,55,0.1)] border border-[#D4AF37]/30">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-[#D4AF37] font-medium">
                            SERVICES FOR CONSULTATION ({selectedServices.length})
                          </h3>
                          <button
                            onClick={clearCart}
                            className="text-xs text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
                          >
                            Clear All
                          </button>
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {selectedServices.map((service) => (
                            <div
                              key={service.id}
                              className="flex items-center justify-between gap-3 text-sm"
                            >
                              <div className="flex-1">
                                <span className="text-[#F5E6B8]">
                                  {service.name}
                                </span>
                                <span className="text-[#A0A0A0] text-xs ml-2">
                                  ({service.category})
                                </span>
                              </div>
                              <button
                                onClick={() => removeService(service.id)}
                                className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors flex-shrink-0"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className={inputClasses}
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className={inputClasses}
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            Organization / Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            className={inputClasses}
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="interest"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            What are you building?
                          </label>
                          <select
                            id="interest"
                            className={`${inputClasses} bg-[#0A0A0A] appearance-none`}
                            value={formData.interest}
                            onChange={handleChange}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1.5em 1.5em",
                            }}
                          >
                            <option value="">Select an option</option>
                            <option value="brand">Brand Identity System</option>
                            <option value="website">Website / Web Application</option>
                            <option value="platform">Full Platform Build</option>
                            <option value="operations">Operational Infrastructure</option>
                            <option value="consulting">Strategic Consulting</option>
                            <option value="ai">AI & Automation</option>
                            <option value="not-sure">Not Sure Yet — Let's Talk</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            className={`${inputClasses} bg-[#0A0A0A] appearance-none`}
                            value={formData.budget}
                            onChange={handleChange}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1.5em 1.5em",
                            }}
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-15k">$5,000 — $15,000</option>
                            <option value="15k-50k">$15,000 — $50,000</option>
                            <option value="50k-plus">$50,000+</option>
                            <option value="discuss">Let's Discuss</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="timeline"
                            className="block text-[#F5E6B8] text-sm font-medium mb-2"
                          >
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            className={`${inputClasses} bg-[#0A0A0A] appearance-none`}
                            value={formData.timeline}
                            onChange={handleChange}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1.5em 1.5em",
                            }}
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP — Urgent</option>
                            <option value="1-2-weeks">1–2 Weeks</option>
                            <option value="1-month">Within 1 Month</option>
                            <option value="2-3-months">2–3 Months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[#F5E6B8] text-sm font-medium mb-2"
                        >
                          Tell us about your project *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          className={`${inputClasses} resize-none`}
                          placeholder="What are you building? What problem are you solving? What does success look like?"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="files"
                          className="block text-[#F5E6B8] text-sm font-medium mb-2"
                        >
                          Upload Reference Files (optional)
                        </label>
                        <p className="text-[#A0A0A0] text-xs mb-3">
                          Share logos, brand guidelines, business plans, design
                          inspiration, or any reference materials
                        </p>
                        <div className="relative">
                          <input
                            type="file"
                            id="files"
                            multiple
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.ai,.psd,.svg"
                            className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#D4AF37] file:text-black hover:file:bg-[#B8962E] file:cursor-pointer`}
                            onChange={handleFileUpload}
                          />
                        </div>
                        {uploadedFiles.length > 0 && (
                          <div className="mt-4 p-4 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[#D4AF37]/30">
                            <p className="text-[#D4AF37] text-xs font-medium uppercase tracking-wide mb-3">
                              {uploadedFiles.length} FILE
                              {uploadedFiles.length !== 1 ? "S" : ""} READY
                            </p>
                            <div className="space-y-2">
                              {uploadedFiles.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between gap-3 text-sm"
                                >
                                  <div className="flex-1 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <span className="text-[#F5E6B8] truncate">
                                      {file.name}
                                    </span>
                                    <span className="text-[#A0A0A0] text-xs flex-shrink-0">
                                      ({(file.size / 1024).toFixed(0)} KB)
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors flex-shrink-0"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full floating-card rounded-full px-8 py-4 bg-[#D4AF37] text-black text-lg font-medium tracking-wide hover:bg-[#B8962E] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-3">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            SENDING...
                          </span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                              →
                            </span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            )}

            {/* Prefer to Talk Section */}
            <AnimatedSection delay={0.3} className="mt-20 text-center">
              <div className="floating-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                  PREFER TO TALK?
                </h2>
                <p className="text-xl text-[#A0A0A0] leading-relaxed mb-8">
                  Book a free 30-minute strategy call. No decks. No pressure.
                  Just a real conversation about what you need and whether XDL
                  is the right fit.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block floating-card rounded-full px-12 py-4 text-[#D4AF37] text-lg font-medium tracking-wide border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group"
                >
                  <span>BOOK A CALL</span>
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}