import React from 'react';
import { ShieldCheck, Award, ThumbsUp, MapPin, Check, Phone, Star, Users, Zap } from 'lucide-react';
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

  const stats = [
    { value: '4,938+', label: 'Jobs Completed' },
    { value: '8+', label: 'Years Experience' },
    { value: '4.9★', label: 'Customer Rating' },
    { value: '24/7', label: 'Emergency Support' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Certified & Accountable Management',
      desc: 'Our directors and engineering managers carry professional certifications, ensuring strict compliance with Dubai Municipality and DEWA standards.',
      color: 'bg-brand-blue/10 text-brand-blue',
    },
    {
      icon: ShieldCheck,
      title: 'Asset Protection Strategy',
      desc: 'Every project includes safety measures, surface protection, furniture covering, and thorough cleaning, securing your property from accidental damages.',
      color: 'bg-brand-blue/10 text-brand-blue',
    },
    {
      icon: ThumbsUp,
      title: 'First-Time-Right Assurance',
      desc: 'We offer a performance warranty on all maintenance services. If not fixed correctly on our first visit, we return and resolve it at our own cost.',
      color: 'bg-brand-blue/10 text-brand-blue',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest">Who We Are</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                About <span className="text-brand-blue">Network Technical</span><br />Services Experts
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                Dubai's most trusted MEP and property maintenance company. Engineering-grade solutions for every home, villa, and commercial space since inception.
              </p>
              <div className="flex gap-4">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  Call Now
                </a>
                <a
                  href={companyDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-brand-blue text-white rounded-xl font-bold text-sm transition-all hover:bg-white/5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-extrabold text-brand-blue">{s.value}</div>
                  <div className="text-sm text-slate-400 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom red booking strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />
      </section>

      {/* ── WHO WE ARE — split image / text ───────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image stack */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="NTS professional team"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 bg-brand-blue text-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
                <div className="text-4xl font-extrabold leading-none">8<span className="text-2xl">+</span></div>
                <div className="text-xs font-semibold leading-tight">Years Work<br />Experience</div>
              </div>

              {/* DEWA badge */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Approved By</div>
                  <div className="text-xs font-bold text-brand-dark">DEWA Certified</div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Setting New Benchmarks in the Dubai{' '}
                <span className="text-brand-blue">MEP & Renovation</span> Industry
              </h2>

              <p className="text-brand-slate text-sm leading-relaxed">
                At Network Technical Services Experts (NTS), we solve home and office repair problems with engineering-grade solutions. Rather than offering temporary patches, we diagnose root causes to provide long-term reliability.
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm font-bold text-brand-dark ml-1">4.9/5</span>
                <span className="text-xs text-brand-slate">from 200+ verified reviews</span>
              </div>

              {/* Values list */}
              <div className="space-y-4">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-slate-100 hover:border-brand-blue/20 transition-colors">
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${v.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark">{v.title}</h4>
                        <p className="text-xs text-brand-slate mt-0.5 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE AREAS ───────────────────────────────────────────── */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Service Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                We Cover All of <span className="text-brand-blue">Dubai</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                With mobile technical teams stationed in major communities, we ensure prompt arrival times within 30 minutes for emergencies.
              </p>

              {/* Office card */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-brand-blue mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Office Location</span>
                </div>
                <p className="text-sm font-semibold text-white">{companyDetails.address}</p>
                <p className="text-xs text-slate-400">For areas not listed, please call us to check availability.</p>
              </div>

              {/* Phone CTA */}
              <a
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                {companyDetails.phone}
              </a>
            </div>

            {/* Right: area grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 p-4 rounded-xl transition-all">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  <span className="text-sm font-semibold text-white">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM / TRUST STRIP ───────────────────────────────────────── */}
      <section className="py-16 bg-brand-light border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, label: '111+ Team Members', sub: 'Certified professionals' },
              { icon: Award, label: 'DEWA Compliant', sub: 'Licensed & insured' },
              { icon: ShieldCheck, label: '100% Guaranteed', sub: 'First-time-right service' },
              { icon: Phone, label: '24/7 Emergency', sub: '30-min response time' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-dark">{item.label}</div>
                    <div className="text-xs text-brand-slate mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
