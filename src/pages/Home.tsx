import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Calendar, ShieldCheck, Star, Wrench,
  Clock, Award, ChevronRight, Users
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import ntsLogo from '../assets/nts_logo.jpeg';
import { servicesData, companyDetails } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Home: React.FC = () => {
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', service: '' });

  const stats = [
    { value: '4,938+', label: 'Jobs Completed' },
    { value: '8+', label: 'Years Experience' },
    { value: '4.9★', label: 'Customer Rating' },
    { value: '24/7', label: 'Emergency Support' },
  ];

  const testimonials = [
    {
      name: "Omar Al-Nuaimi",
      location: "Jumeirah Beach Residence (JBR), Dubai",
      text: "Excellent electrical and AC repair services. The technicians were skilled, fast, and cleaned up after they finished. Highly impressed by their professionalism.",
      rating: 5,
    },
    {
      name: "Aisha Al-Mansoori",
      location: "Downtown Dubai, UAE",
      text: "They did an amazing job remodeling my bathroom and painting the living room. Respectful, organized, and finished right on time. My home looks fresh.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      location: "Dubai Marina, Dubai",
      text: "Had a plumbing emergency on a Friday night with a burst water pipe. They arrived within 30 minutes and resolved the issue immediately. Outstanding service!",
      rating: 5,
    },
  ];

  const whyUs = [
    { icon: ShieldCheck, title: 'How to Benefited Our Services', desc: 'Certified experts with guaranteed first-time-right workmanship.' },
    { icon: Award, title: 'Product Making for Friendly Users', desc: 'Transparent pricing, no hidden charges, respectful service always.' },
    { icon: Wrench, title: 'We Maintaining Safety', desc: 'DEWA-compliant procedures and licensed engineers on every job.' },
  ];

  return (
    <div className="animate-fadeIn">

      {/* ══════════════════════════════════════════════════════════════
           HERO — Dark split layout: text left / worker image right
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-brand-dark text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        {/* Red accent blob top-right */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-brand-blue/10 clip-hero pointer-events-none" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* ── Left: Text content ── */}
            <div className="space-y-7">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Professional{' '}
                <span className="text-brand-blue">Home &amp; Office</span>
                <br />Maintenance Services
              </h1>

              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                We offer premium maintenance services customized to suit your requirements.
                Our dedication is to finish the ideal solution for every project in Dubai.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-extrabold text-sm transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  Discover More
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-brand-blue/50 hover:bg-white/5 text-white rounded-xl font-bold text-sm transition-all"
                >
                  <Calendar className="w-5 h-5 text-brand-blue" />
                  Get Free Quote
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-extrabold text-white">{s.value}</div>
                    <div className="text-[11px] text-white font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: NTS Logo card ── */}
            {/* ── Right: NTS Logo card ── */}
            <div className="relative flex justify-center items-center mt-12 lg:mt-0 px-2 sm:px-6 lg:px-0">
              {/* Logo card */}
              <div className="relative w-full max-w-lg flex items-center justify-center">
                <div className="w-full h-[320px] sm:h-[380px] lg:h-[520px] rounded-2xl bg-white flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Solid clean background - glow removed as requested */}

                  {/* Logo */}
                  <div className="relative z-10 px-4 sm:px-8 flex flex-col items-center justify-center w-full h-full">
                    <img
                      src={ntsLogo}
                      alt="NTS — Network Technical Services Experts"
                      className="w-64 sm:w-80 lg:w-96 max-w-full h-auto object-contain mx-auto"
                    />
                    <p className="text-center text-[9px] sm:text-[10px] lg:text-sm text-slate-500 font-bold tracking-widest uppercase mt-4 sm:mt-6">
                      Network Technical Services Experts
                    </p>
                  </div>

                  {/* Inner ring accent */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200 pointer-events-none" />
                </div>
              </div>

              {/* Floating stats badge */}
              <div className="absolute top-4 right-0 sm:top-8 sm:-right-4 bg-white text-brand-dark rounded-xl sm:rounded-2xl border border-slate-200 p-3 sm:p-5 text-center min-w-[80px] sm:min-w-[110px]">
                <div className="text-xl sm:text-3xl font-extrabold text-brand-blue leading-none">4938</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-slate-500 mt-1 leading-tight">Happy<br />Customers</div>
              </div>

              {/* Experience badge bottom left */}
              <div className="absolute -bottom-3 left-0 sm:-bottom-4 sm:-left-4 bg-brand-blue text-white rounded-xl sm:rounded-2xl border border-brand-blue-700 px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-2 sm:gap-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                <div>
                  <div className="text-lg sm:text-xl font-extrabold leading-none">8+</div>
                  <div className="text-[9px] sm:text-[11px] font-semibold opacity-90 leading-tight">Years Work<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Booking strip — white card with black shade border ── */}
      <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 border border-black/12 px-6 py-5">
            <div className="flex flex-col md:flex-row items-center gap-4">

              {/* Left label */}
              <div className="shrink-0 flex items-center gap-3 md:pr-6 md:border-r border-slate-200">
                <div className="p-2.5 bg-red-50 rounded-xl">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm leading-tight">24/7 Support</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{companyDetails.phone}</div>
                </div>
              </div>

              {/* Inline booking form */}
              <div className="flex flex-col sm:flex-row flex-1 gap-2.5 w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={bookingForm.name}
                  onChange={e => setBookingForm(p => ({ ...p, name: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={bookingForm.email}
                  onChange={e => setBookingForm(p => ({ ...p, email: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-all"
                />
                <select
                  value={bookingForm.service}
                  onChange={e => setBookingForm(p => ({ ...p, service: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Service</option>
                  {servicesData.map(s => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <Link
                  to={`/contact?service=${encodeURIComponent(bookingForm.service)}`}
                  className="px-7 py-2.5 bg-brand-blue hover:bg-red-700 text-white font-extrabold text-sm rounded-xl whitespace-nowrap transition-all shadow-md shadow-brand-blue/30 hover:-translate-y-0.5 shrink-0"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
           OUR LATEST SERVICES — image-first card grid
          ══════════════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">Our Products</span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Our Latest Product</h2>
            <p className="text-brand-slate mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              We specialize in high-quality residential, commercial, and retail maintenance services across Al Barsha and Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-brand-blue/20 transition-all hover:-translate-y-0.5"
            >
              Explore All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           WHO WE ARE — split image left / text right
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: image stack with experience badge */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Dubai Skyline / UAE Context"
                  className="w-full h-[480px] object-cover"
                />
                {/* Dark overlay on bottom third */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Small accent image top-right */}
              <div className="absolute -top-6 -right-6 hidden md:block w-40 h-40 rounded-xl overflow-hidden shadow-xl ring-4 ring-white">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=300&q=80"
                  alt="MEP Technician at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge bottom-left */}
              <div className="absolute bottom-6 left-6 bg-brand-blue text-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
                <div className="text-4xl font-extrabold leading-none">8<span className="text-2xl">+</span></div>
                <div className="text-xs font-semibold leading-tight">
                  Years Work<br />Experience
                </div>
              </div>

              {/* Phone badge */}
              <div className="absolute -bottom-5 right-6 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Call Us Anytime</div>
                  <div className="text-xs font-bold text-brand-dark">{companyDetails.phone}</div>
                </div>
              </div>
            </div>

            {/* Right: text content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Who We Are</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Delivering excellence in{' '}
                <span className="text-brand-blue">technical maintenance & MEP services.</span>
              </h2>

              <p className="text-brand-slate text-sm leading-relaxed">
                Network Technical Services Experts (NTS) is powered by a dedicated team of certified engineers and industry professionals. We are committed to providing reliable, engineering-grade solutions that ensure the safety, efficiency, and longevity of your residential and commercial properties.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {whyUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-1.5 bg-brand-blue/10 rounded-lg shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                        <p className="text-xs text-brand-slate leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Stats row */}
              <div className="flex items-center gap-8 py-4 border-t border-b border-slate-100">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-brand-blue">15000</div>
                  <div className="text-[11px] text-brand-slate font-medium">Projects Done</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-brand-blue">111</div>
                  <div className="text-[11px] text-brand-slate font-medium">Team Members</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <a
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-brand-blue/20 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           OUR SERVICES — Modern bento-grid layout
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-brand-blue mb-3">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                Expert Solutions for <br className="hidden md:block" />
                <span className="text-brand-blue">Every Property Need</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-brand-blue text-white rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-md shrink-0 self-start md:self-auto"
            >
              All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
            {servicesData.map((service, idx) => {
              const LucideIcon = (LucideIcons as any)[service.iconName] || LucideIcons.Wrench;
              // First card spans 2 cols + 2 rows (featured)
              const isFeatured = idx === 0;
              return (
                <Link
                  key={service.slug}
                  to={`/services#${service.slug}`}
                  className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${isFeatured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                    }`}
                >
                  {/* Background image */}
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay — always present */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isFeatured
                    ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10'
                    : 'bg-gradient-to-t from-black/85 via-black/30 to-transparent'
                    }`} />

                  {/* Red left accent on featured */}
                  {isFeatured && <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />}

                  {/* Pricing badge */}
                  <div className="absolute top-4 right-4 bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                    {service.pricing}
                  </div>

                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-5 ${isFeatured ? 'p-7' : 'p-4'}`}>

                    {/* Icon */}
                    <div className={`mb-3 ${isFeatured ? 'mb-4' : 'mb-2'}`}>
                      <div className={`inline-flex p-2.5 bg-brand-blue rounded-xl text-white shadow-lg ${isFeatured ? 'p-3' : ''}`}>
                        <LucideIcon className={isFeatured ? 'w-6 h-6' : 'w-4 h-4'} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-extrabold text-white leading-tight mb-1 ${isFeatured ? 'text-2xl mb-2' : 'text-sm'}`}>
                      {service.title}
                    </h3>

                    {/* Description — featured only always visible, others show on hover */}
                    {isFeatured ? (
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-sm">
                        {service.shortDescription}
                      </p>
                    ) : (
                      <p className="text-slate-300 text-xs leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {service.shortDescription}
                      </p>
                    )}

                    {/* CTA */}
                    <div className={`flex items-center gap-2 transition-all duration-300 ${isFeatured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                      }`}>
                      <span className={`inline-flex items-center gap-1.5 bg-brand-blue hover:bg-brand-orange text-white font-bold rounded-lg transition-colors ${isFeatured ? 'px-5 py-2.5 text-sm' : 'px-3.5 py-2 text-xs'
                        }`}>
                        Book Now <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           BEFORE / AFTER GALLERY — Modern dark layout
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 text-brand-blue mb-3">
                <div className="w-6 h-0.5 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Transformations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Real Results. <span className="text-brand-blue">Real Spaces.</span>
              </h2>
              <p className="text-slate-400 mt-3 text-sm max-w-md leading-relaxed">
                Drag the slider to compare our before &amp; after project results. Every transformation is backed by our quality guarantee.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 shrink-0">
              {[
                { value: '4,938+', label: 'Projects Done' },
                { value: '100%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-brand-blue">{s.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1 — Painting */}
            <div className="group bg-white/5 border border-white/10 hover:border-brand-blue/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              {/* Meta bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Painting</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">Al Barsha Villa</span>
                  <span className="bg-brand-blue/20 text-brand-blue text-[10px] font-bold px-2 py-0.5 rounded-md">5★ Rating</span>
                </div>
              </div>

              {/* Slider */}
              <div className="p-1">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
                  afterImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>

              {/* Project details */}
              <div className="px-5 py-4 space-y-3">
                <h4 className="text-sm font-bold text-white">Villa Living Room Painting &amp; Wall Restoration</h4>
                <div className="flex flex-wrap gap-2">
                  {['Interior Painting', 'Crack Filling', 'Eco-Paint'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>⏱ Completed in 2 days</span>
                  <span className="text-brand-blue font-bold">From 999 AED</span>
                </div>
              </div>
            </div>

            {/* Card 2 — Bathroom */}
            <div className="group bg-white/5 border border-white/10 hover:border-brand-blue/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Remodeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">Dubai Marina Apt</span>
                  <span className="bg-brand-blue/20 text-brand-blue text-[10px] font-bold px-2 py-0.5 rounded-md">5★ Rating</span>
                </div>
              </div>

              <div className="p-1">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                  afterImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>

              <div className="px-5 py-4 space-y-3">
                <h4 className="text-sm font-bold text-white">Modern Bathroom Remodeling &amp; Marble Tiling</h4>
                <div className="flex flex-wrap gap-2">
                  {['Full Remodel', 'Marble Tiles', 'Sanitary Ware'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>⏱ Completed in 5 days</span>
                  <span className="text-brand-blue font-bold">Free Survey</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Kitchen */}
            <div className="group bg-white/5 border border-white/10 hover:border-brand-blue/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Kitchen</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">JBR Apartment</span>
                  <span className="bg-brand-blue/20 text-brand-blue text-[10px] font-bold px-2 py-0.5 rounded-md">5★ Rating</span>
                </div>
              </div>

              <div className="p-1">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                  afterImage="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>

              <div className="px-5 py-4 space-y-3">
                <h4 className="text-sm font-bold text-white">Kitchen Cabinet Remodel &amp; Countertop Upgrade</h4>
                <div className="flex flex-wrap gap-2">
                  {['Carpentry', 'Countertop', 'Backsplash'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>⏱ Completed in 3 days</span>
                  <span className="text-brand-blue font-bold">From 2,500 AED</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm">Want to see your space transformed? Get a free site inspection today.</p>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-brand-blue/20 transition-all hover:-translate-y-0.5 shrink-0"
            >
              Book Free Inspection <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           TESTIMONIALS
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">Meet Our Latest</span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">What Our Clients Say</h2>
            <p className="text-brand-slate mt-3 text-sm max-w-xl mx-auto">
              Verified reviews from residential and office owners across JBR, Downtown, Al Barsha, and other areas in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-brand-light p-7 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Red quote mark */}
                <div className="text-5xl text-brand-blue font-serif leading-none mb-3 opacity-40">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-brand-slate text-sm leading-relaxed italic flex-1">
                  "{test.text}"
                </p>
                <div className="pt-5 border-t border-slate-200 mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">{test.name}</h4>
                    <span className="text-[11px] text-brand-blue font-medium">{test.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           CONTACT CTA — modern dark section
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        {/* Red glow accent — top left */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        {/* Red glow accent — bottom right */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            24/7 Emergency Support
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Have a Maintenance Emergency<br className="hidden sm:block" />
            <span className="text-brand-blue"> or Planning a Renovation?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Our rapid response team is on standby. Get a free site inspection
            and transparent pricing estimate — no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Call button */}
            <a
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-extrabold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              Call Now: {companyDetails.phone}
            </a>
            {/* WhatsApp button */}
            <a
              href={companyDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.179-.399-.369-.407-.54-.414-.141-.005-.304-.005-.467-.005-.163 0-.427.061-.65.306-.224.244-.854.834-.854 2.031s.874 2.35 1.002 2.502c.127.153 1.705 2.593 4.14 3.64.577.248 1.028.396 1.378.508.581.185 1.109.159 1.527.097.466-.07 1.427-.584 1.63-1.147.203-.562.203-1.045.142-1.147-.061-.101-.224-.163-.467-.285-.244-.122-1.427-.704-1.65-.785-.224-.081-.387-.122-.55.122-.163.244-.63.794-.772.956-.142.163-.285.183-.528.061-.244-.122-.962-.355-1.834-1.132-.677-.602-1.133-1.347-1.266-1.572-.132-.224-.014-.346.108-.466.11-.108.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.54-1.3-.74-1.785z" />
              </svg>
              Quick WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
