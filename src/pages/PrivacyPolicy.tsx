import React, { useEffect, useState } from 'react';
import { ShieldCheck, ArrowRight, ChevronRight, Lock, Info, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import { Link } from 'react-router-dom';

const sections = [
  { id: "collection", title: "1. Information We Collect" },
  { id: "usage", title: "2. How We Use Information" },
  { id: "protection", title: "3. Data Protection" },
  { id: "sharing", title: "4. Information Sharing" },
  { id: "cookies", title: "5. Cookies & Tracking" },
  { id: "contact", title: "6. Privacy Contact" }
];

export const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState("collection");

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
        <div className="absolute -top-[50%] -right-[20%] w-[70%] h-[150%] bg-teal-500/20 blur-[120px] rounded-full mix-blend-screen -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400 border border-white/10 shadow-lg backdrop-blur-md">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-white/60 font-semibold uppercase tracking-widest text-sm">Legal Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1.5 rounded-lg text-sm font-semibold border border-teal-500/30">
              Effective Date: June 30, 2026
            </span>
            <span className="text-sm font-medium">Version 1.4</span>
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
                <Link to="/terms" className="text-sm text-brand-blue font-bold hover:underline flex items-center gap-1">
                  Terms of Service <ArrowRight className="w-3 h-3" />
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
                  At <strong>{companyDetails.name}</strong>, we are deeply committed to protecting the privacy and security of our clients' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or book our maintenance and renovation services.
                </p>
              </div>

              <div className="space-y-12">
                <div id="collection" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">1</span>
                    Information We Collect
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We only collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us, booking a service quotation, or actively communicating with our team.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <strong>Personal Data:</strong> Your full name, phone number, email address, and exact property location/villa number.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <strong>Service Data:</strong> Detailed descriptions of your property issues, maintenance history, or renovation blueprints.
                    </li>
                  </ul>
                </div>

                <div id="usage" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm">2</span>
                    How We Use Information
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We use the information we collect to execute our contractual obligations to you and run our business efficiently. Specifically, we use it to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Dispatch technicians accurately to your property for site visits and repairs.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Send you official quotations, invoices, and service completion reports.
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      Provide critical SMS updates regarding technician ETAs and appointment schedules.
                    </li>
                  </ul>
                </div>

                <div id="protection" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center text-sm">3</span>
                    Data Protection
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We use administrative, technical, and physical security measures to help protect your personal information. Client databases are stored securely and access is strictly limited to authorized dispatch and administration staff only.
                  </p>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-sm text-slate-600 leading-relaxed border-l-4 border-l-teal-500">
                    <strong>Disclaimer:</strong> While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no electronic transmission over the Internet can be guaranteed to be 100% secure.
                  </div>
                </div>

                <div id="sharing" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-sm">4</span>
                    Information Sharing
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We <strong>do not sell, trade, or rent</strong> your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners for analytical purposes. We may also release information when required to comply with UAE law or building management requests (e.g., providing technician details and client approvals to building security for entry permits).
                  </p>
                </div>

                <div id="cookies" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center text-sm">5</span>
                    Cookies & Tracking
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track non-personal information about how you interact with our pages. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-32 pt-10 border-t border-slate-100">
                  <h2 className="text-2xl font-bold text-brand-dark mb-6">Privacy Concerns?</h2>
                  <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden isolate">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/30 rounded-full blur-[50px] -z-10" />
                    
                    <h3 className="text-xl font-bold mb-2">Reach out to our DPO</h3>
                    <p className="text-slate-300 mb-6 text-sm">If you wish to access, correct, or delete any personal data we hold about you, contact us immediately.</p>
                    
                    <div className="space-y-4">
                      <p className="flex items-center gap-3 text-sm">
                        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-teal-400">
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

export default PrivacyPolicy;
