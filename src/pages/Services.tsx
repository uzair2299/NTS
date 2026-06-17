import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import { Check, ArrowRight, Shield, MessageSquare, HelpCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const location = useLocation();

  // Handle smooth scroll to hash anchors on load/change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const faqs = [
    {
      q: "What is your emergency response time in Dubai?",
      a: "For emergency maintenance services like major water leakages, pipe blockages, or complete AC cooling failure, we guarantee a response time of within 30 minutes in Al Barsha and surrounding areas (Tecom, Dubai Marina, JBR, JLT, etc.)."
    },
    {
      q: "Do you offer warranties on replacement parts?",
      a: "Yes, we only source genuine, high-quality replacement parts from reputable manufacturers. All parts installed by our technicians carry standard manufacturer warranties, and our installation labor comes with a service guarantee."
    },
    {
      q: "What payment methods do you accept?",
      a: "We offer flexible payment methods for our clients, including Cash, credit/debit Card (via mobile POS machines carried by our estimators), Bank Transfers, and secure online payment links."
    },
    {
      q: "Do you offer Annual Maintenance Contracts (AMC) for villas and apartments?",
      a: "Yes, we provide customizable Annual Maintenance Contracts (AMC) for both residential villas, apartments, and offices. Our plans include scheduled preventive AC cleanings, plumbing inspections, electrical load audits, and priority emergency response."
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-brand-dark to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Our Professional Services</h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Comprehensive property maintenance, MEP engineering, and interior renovation services.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      <section className="py-20 bg-white space-y-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, idx) => {
            const LucideIcon = (Icons as any)[service.iconName] || Icons.Wrench;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-20 last:border-b-0 last:pb-0 scroll-mt-24 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Service Details Content */}
                <div className={`lg:col-span-7 space-y-6 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-blue/5 rounded-2xl text-brand-blue">
                      <LucideIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">{service.title}</h2>
                      <span className="inline-block text-xs font-bold text-brand-orange mt-0.5">{service.pricing}</span>
                    </div>
                  </div>

                  <p className="text-brand-slate text-sm leading-relaxed">{service.longDescription}</p>

                  <div>
                    <h3 className="text-sm font-bold text-brand-dark mb-3">Key Solutions Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.bulletPoints.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-brand-slate">
                          <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Highlights Card */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-brand-light p-6 rounded-2xl border border-slate-200/60 shadow-sm text-left space-y-5">
                    <h4 className="font-extrabold text-brand-dark text-sm border-b border-slate-200 pb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-brand-blue" />
                      Quality Assurance Highlights
                    </h4>
                    
                    <ul className="space-y-3">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full py-3 bg-brand-orange text-white font-bold text-xs rounded-xl hover:bg-brand-orange-600 transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                      >
                        Book Inspection
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={companyDetails.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-brand-green text-white font-bold text-xs rounded-xl hover:bg-green-600 transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-brand-light border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="p-2.5 bg-brand-orange/10 rounded-2xl w-fit mx-auto text-brand-orange mb-3">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Frequently Asked Questions</h3>
            <p className="text-brand-slate text-sm mt-2">Find answers to the most common queries about our maintenance work.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/50 shadow-sm text-left">
                <h4 className="font-bold text-brand-dark text-sm md:text-base flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue shrink-0 mt-1.5"></span>
                  {faq.q}
                </h4>
                <p className="text-brand-slate text-xs md:text-sm mt-3 pl-5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
