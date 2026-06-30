import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, MapPin, Clock, ChevronRight,
  Users, TrendingUp, Shield, GraduationCap, Heart, Send, ArrowRight
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear pathways for advancement and skill development." },
  { icon: Shield, title: "Job Security", desc: "Stable employment with a growing market leader." },
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family." },
  { icon: GraduationCap, title: "Ongoing Training", desc: "Regular certifications and technical skill upgrades." },
  { icon: Users, title: "Great Culture", desc: "A supportive, diverse, and collaborative team environment." },
];

const openPositions = [
  {
    title: "Senior HVAC Technician",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "3-5 Years",
    department: "Engineering",
    desc: "Seeking an experienced HVAC technician proficient in installing, troubleshooting, and repairing commercial and residential AC systems. Must be knowledgeable in R22/R410a systems and DEWA regulations."
  },
  {
    title: "Master Plumber",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "3+ Years",
    department: "Maintenance",
    desc: "Looking for a skilled plumber to handle pipeline installations, leak detection, water heater repairs, and general plumbing maintenance across luxury villas and commercial properties."
  },
  {
    title: "Interior Fit-Out Specialist",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "5+ Years",
    department: "Renovation",
    desc: "We need an expert in remodeling, gypsum partitions, tiling, and bespoke carpentry to lead premium apartment and office renovation projects."
  },
  {
    title: "Customer Service Executive",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "1-2 Years",
    department: "Support",
    desc: "Join our front-line team! You will be responsible for handling client inquiries, booking maintenance schedules, and ensuring 100% customer satisfaction."
  },
  {
    title: "Sales & Estimation Engineer",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "4+ Years",
    department: "Sales",
    desc: "Responsible for conducting site surveys, preparing accurate quotations for maintenance and renovation projects, and converting leads into successful contracts."
  }
];

export const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] font-sans">
      
      {/* 1. HERO SECTION - Ultra Modern Glassmorphism */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-brand-dark overflow-hidden isolate">
        {/* Decorative background blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/30 rounded-full blur-[120px] mix-blend-screen -z-10" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/20 rounded-full blur-[100px] mix-blend-screen -z-10" />
        
        <div className="absolute inset-0 z-[-20] opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Careers at Experts Technical Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/95 to-brand-dark" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-wide uppercase">We are hiring</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight max-w-4xl">
            Build Your Career with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-300">Industry Leaders</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            Shape the future of property maintenance and renovation in Dubai. We're looking for passionate professionals to join our high-performing team.
          </p>
          
          <a href="#open-positions" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-dark rounded-2xl font-extrabold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10">View Open Positions</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* 2. WHY JOIN US - Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Why Work With Us?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At {companyDetails.name}, our people are our greatest asset. We provide an environment where talent is nurtured, recognized, and generously rewarded.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              
              // Bento Layout Classes
              let bentoClass = "group p-8 rounded-3xl transition-all duration-500 flex flex-col justify-between ";
              let iconClass = "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 ";
              let titleClass = "text-xl font-bold mb-3 ";
              let descClass = "leading-relaxed font-medium ";

              if (idx === 0) {
                bentoClass += "md:col-span-2 relative overflow-hidden border-none text-white shadow-lg";
                iconClass += "bg-white/20 text-white backdrop-blur-md relative z-10 group-hover:bg-brand-blue group-hover:text-white";
                titleClass += "text-white relative z-10 text-3xl mt-4";
                descClass += "text-slate-200 relative z-10";
              } else if (idx === 1) {
                bentoClass += "md:col-span-1 md:row-span-2 relative overflow-hidden border-none text-white shadow-lg";
                iconClass += "bg-brand-orange text-white group-hover:bg-white group-hover:text-brand-orange relative z-10 shadow-xl";
                titleClass += "text-white relative z-10 text-3xl mt-8 leading-tight";
                descClass += "text-slate-300 relative z-10";
              } else if (idx === 4) {
                bentoClass += "md:col-span-3 relative overflow-hidden border-none flex-col md:flex-row md:items-center gap-8 shadow-xl";
                iconClass += "bg-white/20 text-white backdrop-blur-md shrink-0 mb-0 group-hover:bg-white group-hover:text-brand-blue relative z-10 w-20 h-20";
                titleClass += "text-white text-3xl mb-2 relative z-10";
                descClass += "text-blue-100 relative z-10 text-lg";
              } else if (idx === 2) {
                bentoClass += "md:col-span-1 relative overflow-hidden border-none text-white shadow-lg";
                iconClass += "bg-teal-500 text-white group-hover:bg-white group-hover:text-teal-500 relative z-10 shadow-xl";
                titleClass += "text-white relative z-10 text-2xl mt-4";
                descClass += "text-slate-200 relative z-10";
              } else {
                bentoClass += "md:col-span-1 relative overflow-hidden border-none text-white shadow-lg";
                iconClass += "bg-brand-orange text-white group-hover:bg-white group-hover:text-brand-orange relative z-10 shadow-xl";
                titleClass += "text-white relative z-10 text-2xl mt-4";
                descClass += "text-slate-200 relative z-10";
              }

              return (
                <div key={idx} className={bentoClass}>
                  {idx === 0 && (
                    <>
                      <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" alt="Career Growth - Electrical Technician" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/20" />
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80" alt="Job Security - Professional Handyman" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent opacity-90" />
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Health Insurance" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-900/80 to-teal-800/40 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Ongoing Training" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/30" />
                    </>
                  )}
                  {idx === 4 && (
                    <>
                      <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80" alt="Team Culture - Construction Team" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent opacity-80" />
                    </>
                  )}
                  
                  {idx === 4 ? (
                    <>
                      <div className={iconClass}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="relative z-10">
                        <h3 className={titleClass}>{benefit.title}</h3>
                        <p className={descClass}>{benefit.desc}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={iconClass}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="relative z-10">
                        <h3 className={titleClass}>{benefit.title}</h3>
                        <p className={descClass}>{benefit.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS - Sleek SaaS Style Cards */}
      <section id="open-positions" className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Current Openings</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover your next career move and make an impact across the UAE.</p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((job, idx) => (
              <div key={idx} className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-brand-blue/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col md:flex-row gap-8 md:items-center overflow-hidden">
                {/* Decorative side accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-extrabold uppercase tracking-wider rounded-lg">
                      {job.department}
                    </span>
                    <span className="text-sm font-medium text-slate-400">Posted Recently</span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                      <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                      <Briefcase className="w-4 h-4 text-slate-400" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                      <Clock className="w-4 h-4 text-slate-400" /> Exp: {job.experience}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed">
                    {job.desc}
                  </p>
                </div>
                
                <div className="shrink-0 md:pl-8 md:border-l border-slate-100 flex flex-col justify-center">
                  <a 
                    href={`mailto:${companyDetails.email}?subject=Application for ${job.title}`}
                    className="group/btn inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-slate-900 hover:bg-brand-blue text-white rounded-2xl font-bold transition-all"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[12px] text-slate-400 mt-4 font-medium text-center">Fast 2-min application</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPONTANEOUS APPLICATION CTA - Vibrant Gradient */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-blue-600 to-indigo-700" />
        
        {/* Geometric patterns */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Don't see a perfect fit?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always accepting resumes from talented individuals. Send us your CV and we will reach out when the perfect opportunity arises.
          </p>
          <a 
            href={`mailto:${companyDetails.email}?subject=Spontaneous Application`} 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-dark rounded-2xl font-extrabold hover:bg-brand-dark hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1"
          >
            Submit Your Resume <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Careers;
