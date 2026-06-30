import React, { useEffect, useState } from 'react';
import { ShieldCheck, ArrowRight, ChevronRight, Scale, Info, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import { Link } from 'react-router-dom';

const sections = [
  { id: "services", title: "1. Services Provided" },
  { id: "pricing", title: "2. Quotations and Pricing" },
  { id: "payment", title: "3. Payment Terms" },
  { id: "warranties", title: "4. Warranties and Guarantees" },
  { id: "liability", title: "5. Liability & Limitations" },
  { id: "contact", title: "6. Contact Information" }
];

export const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentScroll = window.scrollY;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && currentScroll >= el.offsetTop - 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] font-sans min-h-screen pb-24">
      
      {/* 1. HERO HEADER */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden isolate">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute -top-[50%] -right-[20%] w-[70%] h-[150%] bg-brand-blue/20 blur-[120px] rounded-full mix-blend-screen -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-orange border border-white/10 shadow-lg backdrop-blur-md">
              <Scale className="w-6 h-6" />
            </div>
            <span className="text-white/60 font-semibold uppercase tracking-widest text-sm">Legal Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Terms of Service
          </h1>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="bg-brand-blue/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm font-semibold border border-brand-blue/30">
              Effective Date: June 30, 2026
            </span>
            <span className="text-sm font-medium">Version 2.1</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-4 px-2">Table of Contents</h3>
              <nav className="flex flex-col space-y-1">
                {sections.map(section => (
                  <button 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-left ${
                      activeSection === section.id 
                        ? 'bg-brand-blue/10 text-brand-blue shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-brand-dark'
                    }`}
                  >
                    {section.title}
                    {activeSection === section.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-slate-100 px-2">
                <p className="text-sm text-slate-500 font-medium mb-3">Looking for something else?</p>
                <Link to="/privacy" className="text-sm text-brand-blue font-bold hover:underline flex items-center gap-1">
                  Privacy Policy <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Document Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4 mb-10">
                <Info className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  Welcome to <strong>{companyDetails.name}</strong>. These Terms of Service govern your use of our website and the maintenance, repair, and renovation services we provide. By accessing our website or booking our services, you agree to be legally bound by these terms. Please read them carefully.
                </p>
              </div>

              <div className="space-y-12">
                <div id="services" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">1</span>
                    Services Provided
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We offer professional property maintenance, AC repair, plumbing, electrical work, and renovation services across the UAE. All services are strictly subject to availability and formal quotation approval.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      We reserve the right to refuse service for properties that present severe safety hazards to our staff.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      Timelines provided are estimations and may change based on material availability and site conditions.
                    </li>
                  </ul>
                </div>

                <div id="pricing" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm">2</span>
                    Quotations and Pricing
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Initial site visits may be subject to a standard call-out fee. This fee is usually deductible from the final invoice upon your approval of the quotation.
                  </p>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-sm text-slate-600 leading-relaxed border-l-4 border-l-brand-orange">
                    <strong>Note:</strong> All prices quoted in our estimations are valid for exactly 15 days unless otherwise specified in writing. Changes to project scope after approval will result in a revised quotation.
                  </div>
                </div>

                <div id="payment" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center text-sm">3</span>
                    Payment Terms
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Payment is due immediately upon completion of the service for all standard, one-off maintenance jobs (e.g., AC repair, plumbing fixes).
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For large renovation, interior fit-out, or commercial projects, a structured payment plan will be outlined in a formal contract. This typically requires a <strong>30% to 50% upfront deposit</strong> before materials are procured and work begins.
                  </p>
                </div>

                <div id="warranties" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-sm">4</span>
                    Warranties and Guarantees
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We stand by the quality of our craftsmanship. New installations and major repairs typically carry a limited warranty. The specific terms and duration of warranties vary significantly depending on the service executed and materials used. 
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Exact warranty periods are uniquely detailed on your final service invoice. Warranties are voided if third-party contractors alter our work.
                  </p>
                </div>

                <div id="liability" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center text-sm">5</span>
                    Liability & Limitations
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    While we take extreme care while operating on your property, utilizing drop cloths and protective gear, {companyDetails.name} is not legally liable for:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Pre-existing structural issues or hidden damages discovered during the course of work.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Failures or damages caused by third-party materials or appliances not supplied directly by us.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Delays caused by severe weather, DEWA restrictions, or building management access denials.
                    </li>
                  </ul>
                </div>

                <div id="contact" className="scroll-mt-32 pt-10 border-t border-slate-100">
                  <h2 className="text-2xl font-bold text-brand-dark mb-6">Questions about these Terms?</h2>
                  <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden isolate">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full blur-[50px] -z-10" />
                    
                    <h3 className="text-xl font-bold mb-2">Reach out to our Legal Team</h3>
                    <p className="text-slate-300 mb-6 text-sm">If you require clarification on any of our service policies, we are here to help.</p>
                    
                    <div className="space-y-4">
                      <p className="flex items-center gap-3 text-sm">
                        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-brand-blue">
                          <ShieldCheck className="w-4 h-4" />
                        </span>
                        {companyDetails.name}
                      </p>
                      <p className="flex items-center gap-3 text-sm">
                        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange">
                          @
                        </span>
                        <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors">{companyDetails.email}</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsOfService;
