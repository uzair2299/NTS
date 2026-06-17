import React from 'react';
import { ShieldCheck, Award, ThumbsUp, MapPin, Check } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export const About: React.FC = () => {
  const coverageAreas = [
    "Al Barsha 1, 2 & 3",
    "Barsha Heights (Tecom)",
    "Dubai Marina & JBR",
    "Jumeirah Lakes Towers (JLT)",
    "Palm Jumeirah",
    "Downtown Dubai & Business Bay",
    "Arabian Ranches & Motor City",
    "Emirates Hills, Meadows & Springs",
    "Jumeirah & Umm Suqeim",
    "Al Quoz & Al Wasl"
  ];

  return (
    <div className="animate-fadeIn">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-brand-dark to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">About Our Company</h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Learn more about Experts Technical Services — your trusted engineering partner in Dubai.
          </p>
        </div>
      </section>

      {/* CORE PROFILE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder / Visual block */}
            <div className="bg-brand-light border border-slate-100 rounded-3xl p-8 relative overflow-hidden shadow-sm h-[320px] md:h-[450px] flex flex-col justify-between text-left">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl"></div>
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">
                  ESTABLISHED PARTNER
                </span>
                <h3 className="text-2xl font-bold text-brand-dark leading-tight">
                  Providing Premium Property Maintenance Solutions Since Inception
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  We are a dedicated team of engineers, plumbers, electricians, painters, and builders serving residential villas, high-rise apartments, and commercial offices across Dubai.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-center mt-auto relative z-10">
                <div>
                  <h4 className="text-2xl font-black text-brand-blue">100%</h4>
                  <p className="text-[10px] uppercase font-bold text-brand-slate mt-1">Vetted Team</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-orange">30 Min</h4>
                  <p className="text-[10px] uppercase font-bold text-brand-slate mt-1">Response Time</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-green">24/7</h4>
                  <p className="text-[10px] uppercase font-bold text-brand-slate mt-1">MEP Support</p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-6 text-left">
              <h2 className="text-xs font-bold text-brand-blue uppercase tracking-widest">Who We Are</h2>
              <h3 className="text-3xl font-extrabold text-brand-dark">
                Setting New Benchmarks in the Dubai MEP & Renovation Industry
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                At **Experts Technical Services**, we solve home and office repair problems with engineering-grade solutions. Rather than offering temporary patches, we diagnose root causes to provide long-term reliability.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-1.5 bg-brand-blue/10 rounded-lg h-fit text-brand-blue shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">Certified & Accountable Management</h4>
                    <p className="text-xs text-brand-slate mt-0.5">
                      Our directors and engineering managers carry professional certifications, ensuring strict compliance with Dubai Municipality and DEWA standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1.5 bg-brand-green/10 rounded-lg h-fit text-brand-green shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">Asset Protection Strategy</h4>
                    <p className="text-xs text-brand-slate mt-0.5">
                      Every project includes safety measures, surface protection, furniture covering, and thorough cleaning, securing your property from accidental damages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1.5 bg-brand-orange/10 rounded-lg h-fit text-brand-orange shrink-0">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">First-Time-Right Assurance</h4>
                    <p className="text-xs text-brand-slate mt-0.5">
                      We offer a performance warranty on all maintenance services. If the issue is not fixed correctly on our first visit, we will return and resolve it at our own cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section className="py-20 bg-brand-light border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Area description */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="p-2.5 bg-brand-blue/10 rounded-2xl w-fit text-brand-blue">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                Service Coverage Areas in Dubai
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                With mobile technical teams stationed in major communities, we ensure prompt arrival times within 30 minutes for emergencies. We regularly service residential and commercial units in:
              </p>
              <div className="p-5 bg-white border border-slate-200/60 rounded-2xl text-xs text-brand-slate space-y-2">
                <p className="font-bold text-brand-dark">Office Location:</p>
                <p>{companyDetails.address}</p>
                <p className="pt-2">For areas not listed, please call us to check availability.</p>
              </div>
            </div>

            {/* Right Column List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4.5 rounded-xl border border-slate-200/50 shadow-sm text-left">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-brand-dark">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
