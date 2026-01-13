import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Calendar, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ 
    submitting: false, 
    succeeded: false, 
    errors: [] as string[] 
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    // If no Formspree endpoint is configured, show a message
    if (!formspreeEndpoint) {
      alert("Contact form is not yet configured. Please email us directly at hello@xceptionaldesignlab.com");
      return;
    }
    
    setFormState({ submitting: true, succeeded: false, errors: [] });
    
    try {
      const formData = new FormData(form);
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, errors: [] });
        form.reset();
      } else {
        const data = await response.json();
        setFormState({ 
          submitting: false, 
          succeeded: false, 
          errors: data.errors?.map((err: any) => err.message) || ['Failed to send message']
        });
      }
    } catch (error) {
      setFormState({ 
        submitting: false, 
        succeeded: false, 
        errors: ['Network error. Please try again.']
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="container max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Let's <span className="text-[#D4AF37]">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Ready to elevate your operations, design, or communications? 
              Schedule a consultation to discuss how we can bring Chief of Staff-level 
              governance and creativity to your organization.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info & Booking */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Whether you need a strategic partner for a specific project or 
                    ongoing operational support, we're here to help you scale.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#C4A137]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-gray-600">hello@xceptionaldesignlab.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-sm flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#C4A137]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Location</h3>
                        <p className="text-gray-600">Based in New York / New Jersey Area</p>
                        <p className="text-gray-500 text-sm">Available for global remote engagements</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Card */}
                <Card className="bg-black text-white border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold">Book a Strategy Call</h3>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Direct access to our principal consultants. 30-minute introductory 
                      session to assess your needs and fit.
                    </p>
                    <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold py-6 text-lg">
                      View Calendar Availability
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Inquiry Form */}
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {formState.succeeded && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700 mt-1">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}
                
                {formState.errors.length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-medium text-red-900">Error sending message</p>
                    <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                      {formState.errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        placeholder="Jane" 
                        className="bg-white" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        placeholder="Doe" 
                        className="bg-white" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="jane@company.com" 
                      className="bg-white" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interest</label>
                    <select 
                      id="service"
                      name="service"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="Strategic Operations">Strategic Operations</option>
                      <option value="Design & Brand">Design & Brand</option>
                      <option value="Communications">Communications</option>
                      <option value="Technical Architecture">Technical Architecture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or challenge..." 
                      className="min-h-[150px] bg-white"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 font-bold py-6"
                    disabled={formState.submitting}
                  >
                    {formState.submitting ? 'Sending...' : 'Send Inquiry'} 
                    {!formState.submitting && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
