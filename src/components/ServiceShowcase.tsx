import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight, Phone, ChevronRight, Star } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';

export const ServiceShowcase: React.FC = () => {
  const [active, setActive] = useState(0);
  const service = servicesData[active];
  const LucideIcon = (LucideIcons as any)[service.iconName] || LucideIcons.Wrench;

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
              Professional Services <br />
              <span className="text-brand-blue">Built for Dubai</span>
            </h2>
          </div>
          <p className="text-brand-slate text-sm max-w-xs leading-relaxed">
            Click any service to explore what's included, pricing, and what makes us the best choice.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[580px]">

          {/* LEFT — vertical tab list */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {servicesData.map((s, idx) => {
              const Icon = (LucideIcons as any)[s.iconName] || LucideIcons.Wrench;
              const isActive = idx === active;
              return (
                <button
                  key={s.slug}
                  onClick={() => setActive(idx)}
                  className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 border ${
                    isActive
                      ? 'bg-brand-dark border-brand-blue text-white shadow-lg'
                      : 'bg-brand-light border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50'
                  }`}
                >
                  {/* Service number */}
                  <span className={`text-xs font-extrabold w-6 shrink-0 ${isActive ? 'text-brand-blue' : 'text-slate-300 group-hover:text-brand-blue/50'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'bg-white text-brand-slate group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title + pricing */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-brand-dark'}`}>
                      {s.title}
                    </div>
                    <div className={`text-[11px] font-semibold mt-0.5 ${isActive ? 'text-brand-blue' : 'text-brand-slate'}`}>
                      {s.pricing}
                    </div>
                  </div>

                  {/* Active indicator */}
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${
                    isActive ? 'text-brand-blue' : 'text-slate-300 group-hover:text-brand-blue/50'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT — Service detail panel */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl min-h-[520px]" key={active}>
            {/* Background image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />

            {/* Dark gradient overlay — heavier at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
            {/* Subtle left-edge red accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />

            {/* Service number watermark */}
            <div className="absolute top-6 right-8 text-[120px] font-extrabold text-white/5 leading-none select-none pointer-events-none">
              {String(active + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">

              {/* Icon + category pill */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-brand-blue rounded-xl text-white shadow-lg">
                  <LucideIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-brand-blue/10 border border-brand-blue/30 px-3 py-1 rounded-lg">
                  {service.pricing}
                </span>
                <div className="flex gap-0.5 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                {service.title}
              </h3>

              {/* Short description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-lg">
                {service.shortDescription}
              </p>

              {/* Bullet grid — 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {service.bulletPoints.slice(0, 4).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Highlights row */}
              <div className="flex flex-wrap gap-2 mb-7">
                {service.highlights.map((h, i) => (
                  <span key={i} className="text-[10px] font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {h}
                  </span>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold text-sm transition-all shadow-lg"
                >
                  Book Inspection <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-xl font-bold text-sm transition-all backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  Call Now
                </a>
                <Link
                  to="/services"
                  className="ml-auto text-xs font-bold text-slate-400 hover:text-white transition-colors hidden sm:flex items-center gap-1"
                >
                  All Services <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: all services link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
          >
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ServiceShowcase;
