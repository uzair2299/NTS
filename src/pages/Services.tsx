import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import { Check, ArrowRight, MessageSquare, HelpCircle, Zap, Phone, ChevronDown, ChevronUp } from 'lucide-react';

export const Services: React.FC = () => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const faqs = [
    {
      q: "What is your emergency response time in Dubai?",
      a: "For emergency maintenance services like major water leakages, pipe blockages, or complete AC cooling failure, we guarantee a response time of within 30 minutes in Al Barsha and surrounding areas (Tecom, Dubai Marina, JBR, JLT, etc.).",
    },
    {
      q: "Do you offer warranties on replacement parts?",
      a: "Yes, we only source genuine, high-quality replacement parts from reputable manufacturers. All parts installed by our technicians carry standard manufacturer warranties, and our installation labor comes with a service guarantee.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We offer flexible payment methods including Cash, Credit/Debit Card (via mobile POS machines), Bank Transfers, and secure online payment links.",
    },
    {
      q: "Do you offer Annual Maintenance Contracts (AMC)?",
      a: "Yes, we provide customizable Annual Maintenance Contracts (AMC) for residential villas, apartments, and offices. Our plans include scheduled preventive AC cleanings, plumbing inspections, electrical load audits, and priority emergency response.",
    },
  ];

  return (
    <div className="animate-fadeIn">

      {/* ── PAGE HERO BANNER ──────────────────────────────────────────── */}
      <section className="relative bg-brand-dark text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                We Delivered <span className="text-brand-blue">Best Results</span><br />Services
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                Comprehensive property maintenance, MEP engineering, and interior renovation services across all of Dubai.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  Emergency Call
                </a>
                <a
                  href={companyDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-brand-blue text-white rounded-xl font-bold text-sm transition-all hover:bg-white/5"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right: service icon pills */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {servicesData.map(service => {
                const LucideIcon = (Icons as any)[service.iconName] || Icons.Wrench;
                return (
                  <a
                    key={service.slug}
                    href={`#${service.slug}`}
                    className="group flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-brand-blue/10 rounded-xl transition-all"
                  >
                    <div className="p-2 bg-brand-blue/20 group-hover:bg-brand-blue rounded-lg transition-colors shrink-0">
                      <LucideIcon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{service.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />
      </section>

      {/* ── DETAILED SERVICES LIST ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, idx) => {
            const LucideIcon = (Icons as any)[service.iconName] || Icons.Wrench;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}>

                  {/* Service image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Icon badge on image */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="p-2.5 bg-brand-blue rounded-xl text-white shadow-lg">
                          <LucideIcon className="w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-sm">{service.title}</span>
                      </div>

                      {/* Price badge */}
                      <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                        {service.pricing}
                      </div>
                    </div>

                    {/* CTA card below image */}
                    <div className="mt-4 bg-brand-light p-5 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-bold text-brand-dark text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        Quality Assurance Highlights
                      </h4>
                      <ul className="space-y-2">
                        {service.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-center gap-2 text-xs font-semibold text-brand-slate">
                            <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-slate-200 flex gap-2">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="flex-1 py-2.5 bg-brand-blue hover:bg-brand-blue-700 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          Book Now <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={companyDetails.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-brand-green hover:bg-green-600 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Service text content */}
                  <div className={`lg:col-span-7 space-y-6 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2 text-brand-blue">
                      <div className="w-6 h-0.5 bg-brand-blue" />
                      <span className="text-xs font-bold uppercase tracking-widest">Service {String(idx + 1).padStart(2, '0')}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">{service.title}</h2>

                    <p className="text-brand-slate text-sm leading-relaxed">{service.longDescription}</p>

                    <div>
                      <h3 className="text-sm font-bold text-brand-dark mb-4 flex items-center gap-2">
                        <span className="w-4 h-0.5 bg-brand-blue" />
                        Key Solutions Included
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.bulletPoints.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 bg-brand-light p-3 rounded-xl border border-slate-100">
                            <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                            <span className="text-xs text-brand-slate">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider (not after last) */}
                {idx < servicesData.length - 1 && (
                  <div className="mt-20 border-t border-slate-100" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">Got Questions?</span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
            <p className="text-slate-400 mt-3 text-sm">Find answers to the most common queries about our maintenance work.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-blue/30 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="font-bold text-white text-sm">{faq.q}</span>
                  </div>
                  {openFaq === idx
                    ? <ChevronUp className="w-4 h-4 text-brand-blue shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  }
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
