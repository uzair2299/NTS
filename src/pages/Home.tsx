import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Calendar, ShieldCheck, Star, Wrench,
  Clock, Award, ChevronRight, Zap, Users
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Home: React.FC = () => {
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', service: '' });

  const stats = [
    { value: '4,938+', label: 'Jobs Completed' },
    { value: '30+', label: 'Years Experience' },
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
              {/* Label */}
              <div className="flex items-center gap-2 text-brand-blue">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest">Welcome to Experts</span>
              </div>

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
                    <div className="text-xl font-extrabold text-brand-blue">{s.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Hero image + floating badge ── */}
            <div className="relative hidden lg:flex justify-center items-end">
              {/* Main hero image */}
              <div className="relative w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
                  alt="Professional technician in red uniform"
                  className="w-full h-[520px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Red bar accent on image */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-brand-blue/30" />
              </div>

              {/* Floating stats badge */}
              <div className="absolute top-8 -right-4 bg-white text-brand-dark rounded-2xl shadow-2xl p-5 text-center min-w-[110px]">
                <div className="text-3xl font-extrabold text-brand-blue leading-none">4938</div>
                <div className="text-[11px] font-bold text-slate-500 mt-1 leading-tight">Happy<br/>Customers</div>
              </div>

              {/* Experience badge bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-brand-blue text-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                <Award className="w-8 h-8 shrink-0" />
                <div>
                  <div className="text-xl font-extrabold leading-none">30+</div>
                  <div className="text-[11px] font-semibold opacity-90 leading-tight">Years Work<br/>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Red booking strip at bottom of hero ── */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-blue z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-4 py-4">
              {/* Left label */}
              <div className="text-white font-bold text-sm shrink-0">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white/70" />
                  <div>
                    <div className="font-extrabold">24/7 Support for help</div>
                    <div className="text-xs text-white/70 font-normal">Work at {companyDetails.phone}</div>
                  </div>
                </div>
              </div>

              {/* Inline booking form */}
              <div className="flex flex-col sm:flex-row flex-1 gap-2 md:pl-6 md:border-l border-white/20 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  value={bookingForm.name}
                  onChange={e => setBookingForm(p => ({ ...p, name: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={bookingForm.email}
                  onChange={e => setBookingForm(p => ({ ...p, email: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <select
                  value={bookingForm.service}
                  onChange={e => setBookingForm(p => ({ ...p, service: e.target.value }))}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50 appearance-none"
                >
                  <option value="" className="text-brand-dark">Select Service</option>
                  {servicesData.map(s => (
                    <option key={s.slug} value={s.title} className="text-brand-dark">{s.title}</option>
                  ))}
                </select>
                <Link
                  to={`/contact?service=${encodeURIComponent(bookingForm.service)}`}
                  className="px-6 py-2.5 bg-brand-dark hover:bg-slate-900 text-white font-bold text-sm rounded-lg whitespace-nowrap transition-colors shrink-0"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           OUR LATEST SERVICES — image-first card grid
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-light">
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Technician at work"
                  className="w-full h-[480px] object-cover"
                />
                {/* Dark overlay on bottom third */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Small accent image top-right */}
              <div className="absolute -top-6 -right-6 hidden md:block w-40 h-40 rounded-xl overflow-hidden shadow-xl ring-4 ring-white">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=300&q=80"
                  alt="Technician tool work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge bottom-left */}
              <div className="absolute bottom-6 left-6 bg-brand-blue text-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
                <div className="text-4xl font-extrabold leading-none">30<span className="text-2xl">+</span></div>
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
                Our goal is ensure best{' '}
                <span className="text-brand-blue">electrical accessibility.</span>
              </h2>

              <p className="text-brand-slate text-sm leading-relaxed">
                Experts Technical Services is powered by a team of not only professionals, however, and pioneers in our Company. We have a tendency to believe the idea that effort making in any website.
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
           WE DELIVERED BEST RESULTS — dark strip with service icons
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">Our Services</span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold">We Delivered Best<br />Results Services</h2>
            <p className="text-slate-400 mt-3 text-sm max-w-lg mx-auto">
              Expert technical services across all areas of home and office maintenance in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesData.map(service => {
              const LucideIcon = (LucideIcons as any)[service.iconName] || LucideIcons.Wrench;
              return (
                <Link
                  key={service.slug}
                  to={`/services#${service.slug}`}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all text-center"
                >
                  <div className="p-3 bg-brand-blue/20 group-hover:bg-brand-blue rounded-xl transition-colors">
                    <LucideIcon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-white/80 group-hover:text-white transition-colors leading-tight">{service.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           BEFORE / AFTER GALLERY
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-brand-blue mb-3">
              <div className="w-6 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest">Our Transformations</span>
              <div className="w-6 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Before &amp; After Project Gallery</h2>
            <p className="text-brand-slate mt-3 text-sm max-w-xl mx-auto">
              Slide to compare real painting, carpentry, and renovation jobs. See the quality difference expert techniques make.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-brand-dark">Villa Living Room Painting &amp; Wall Restoration</h4>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Before Painting"
                afterLabel="After Painting"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold text-brand-dark">Modern Bathroom Remodeling &amp; Tiling</h4>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Outdated Tile Work"
                afterLabel="Premium Marble Finish"
              />
            </div>
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
           CONTACT CTA — dark red banner
          ══════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-brand-orange/20 skew-x-[-8deg] translate-x-1/4 hidden lg:block" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Have a Maintenance Emergency or Planning a Renovation?
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto text-sm md:text-base">
            Contact us right now! Our rapid response team will diagnose and fix your problem.
            Get a free site inspection and pricing estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-dark hover:bg-slate-900 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              Call Now: {companyDetails.phone}
            </a>
            <a
              href={companyDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.179-.399-.369-.407-.54-.414-.141-.005-.304-.005-.467-.005-.163 0-.427.061-.65.306-.224.244-.854.834-.854 2.031s.874 2.35 1.002 2.502c.127.153 1.705 2.593 4.14 3.64.577.248 1.028.396 1.378.508.581.185 1.109.159 1.527.097.466-.07 1.427-.584 1.63-1.147.203-.562.203-1.045.142-1.147-.061-.101-.224-.163-.467-.285-.244-.122-1.427-.704-1.65-.785-.224-.081-.387-.122-.55.122-.163.244-.63.794-.772.956-.142.163-.285.183-.528.061-.244-.122-.962-.355-1.834-1.132-.677-.602-1.133-1.347-1.266-1.572-.132-.224-.014-.346.108-.466.11-.108.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.54-1.3-.74-1.785z"/>
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
