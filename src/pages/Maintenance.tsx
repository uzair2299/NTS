import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Home, Building, Building2, Briefcase,
  Settings, AlertTriangle, Calendar, CheckCircle2,
  ArrowRight, MessageCircle, Star, Plus, Minus,
  ShieldCheck, Clock, Check, Factory, Store,
  Utensils, Warehouse, GraduationCap, HeartPulse, MapPin
} from 'lucide-react';

// --- DATA STRUCTURES ---
const services = [
  { icon: Home, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', title: 'General Home Maintenance', desc: 'Routine maintenance to keep your home safe, functional, and well-maintained.' },
  { icon: Building, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80', title: 'Villa Maintenance', desc: 'Complete maintenance solutions for villas, including inspections, repairs, and preventive maintenance.' },
  { icon: Building2, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80', title: 'Apartment Maintenance', desc: 'Reliable maintenance services for apartments, studios, and residential units.' },
  { icon: Briefcase, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', title: 'Office Maintenance', desc: 'Maintain a professional workplace with scheduled inspections and timely repairs.' },
  { icon: Wrench, image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80', title: 'Handyman Services', desc: 'Professional handyman solutions for all minor repairs and installations.' },
  { icon: Factory, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80', title: 'Property Maintenance', desc: 'Comprehensive maintenance for residential and commercial properties.' },
  { icon: Settings, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80', title: 'Preventive Maintenance', desc: 'Regular inspections and servicing to prevent costly repairs.' },
  { icon: AlertTriangle, image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80', title: 'Corrective Maintenance', desc: 'Quick diagnosis and repair of existing issues.' },
  { icon: Clock, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', title: 'Emergency Maintenance', desc: 'Fast-response emergency repair services available when unexpected problems arise.' },
  { icon: Calendar, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80', title: 'Annual Maintenance (AMC)', desc: 'Affordable maintenance packages for year-round peace of mind.' },
];

const includedItems = [
  'Routine Property Inspections', 'Door & Window Repairs', 'Lock & Handle Replacement',
  'Furniture Assembly', 'TV Mounting', 'Curtain & Blind Installation',
  'Shelving Installation', 'Silicone Replacement', 'Caulking',
  'Minor Repairs', 'Preventive Maintenance', 'Emergency Support'
];

const packages = [
  {
    name: 'Basic Package',
    suitable: 'Suitable for apartments',
    features: ['Quarterly inspection', 'Minor repairs', 'Technician support', 'Annual health check'],
    popular: false
  },
  {
    name: 'Standard Package',
    suitable: 'Suitable for villas',
    features: ['Monthly inspection', 'Preventive maintenance', 'Priority technician', 'Discount on repairs'],
    popular: true
  },
  {
    name: 'Premium Package',
    suitable: 'Suitable for businesses',
    features: ['Unlimited service requests', 'Emergency response', 'Dedicated maintenance team', 'Scheduled inspections', 'Priority support', 'Annual maintenance report'],
    popular: false
  }
];

const industries = [
  { icon: Home, name: 'Residential Homes' },
  { icon: Building, name: 'Villas' },
  { icon: Building2, name: 'Apartments' },
  { icon: Briefcase, name: 'Offices' },
  { icon: Factory, name: 'Commercial Buildings' },
  { icon: Store, name: 'Retail Stores' },
  { icon: Utensils, name: 'Restaurants' },
  { icon: Warehouse, name: 'Warehouses' },
  { icon: GraduationCap, name: 'Schools' },
  { icon: HeartPulse, name: 'Healthcare Facilities' }
];

const processSteps = [
  { step: 1, title: 'Book Service' },
  { step: 2, title: 'Property Inspection' },
  { step: 3, title: 'Receive Quotation' },
  { step: 4, title: 'Maintenance Work' },
  { step: 5, title: 'Quality Inspection' },
  { step: 6, title: 'Customer Satisfaction' }
];

const reasons = [
  'Certified Technicians', 'Affordable Pricing', 'Transparent Quotes',
  'Fast Response', 'Emergency Support', 'Quality Workmanship',
  'Modern Equipment', 'Satisfaction Guaranteed', 'Licensed & Insured', 'Flexible Maintenance Packages'
];

const areas = [
  'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'
];

const faqs = [
  { q: 'Do you offer emergency maintenance?', a: 'Yes, we offer fast-response emergency repair services 24/7 for unexpected problems.' },
  { q: 'Can I book a one-time service?', a: 'Absolutely! Whether you require a one-time repair or a long-term contract, we are here to help.' },
  { q: 'What is included in an AMC package?', a: 'AMC packages generally include routine property inspections, preventive maintenance, minor repairs, and priority support. Specifics vary by package level.' },
  { q: 'Do you provide villa maintenance?', a: 'Yes, we offer complete maintenance solutions specifically tailored for villas across the UAE.' },
  { q: 'Do you supply materials?', a: 'Yes, we can supply all necessary materials and spare parts, ensuring high quality and compatibility.' },
  { q: 'Are your technicians certified?', a: 'Yes, all our technicians are fully certified, licensed, and experienced in their respective fields.' },
  { q: 'How quickly can you arrive?', a: 'For emergencies, we aim to arrive as fast as possible. For standard bookings, we offer flexible scheduling to suit your needs.' }
];

export const Maintenance: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Premium Villa Maintenance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Home & Property Maintenance</span> Services in UAE
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Keep your home, villa, apartment, or office in perfect condition with reliable maintenance solutions. From minor repairs to complete property care, our certified technicians are available when you need them.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
              Get Free Quote
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 hover:border-white text-white rounded-xl font-bold transition-all hover:bg-white/5">
              Book a Technician
            </Link>
            <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE OUR MAINTENANCE SERVICES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Why Choose Our Maintenance Services?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At <strong>Experts Technical Services</strong>, we provide comprehensive maintenance solutions for residential and commercial properties across the UAE. Whether you require a one-time repair or a long-term maintenance contract, our experienced technicians ensure every job is completed efficiently, safely, and to the highest standards.
          </p>
        </div>
      </section>

      {/* 3. OUR MAINTENANCE SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Our Maintenance Services</h2>
            <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-lg group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{srv.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-1">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">What's Included</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our property maintenance services cover all aspects of home and office care. Here is a checklist of some of our most commonly requested tasks.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold transition-all">
                Request a Service <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAINTENANCE PACKAGES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Maintenance Packages ⭐</h2>
            <p className="text-lg text-slate-600">Choose the right Annual Maintenance Contract (AMC) for your property.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-white rounded-3xl border p-8 flex flex-col ${pkg.popular ? 'border-brand-blue shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-md'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-extrabold text-brand-dark mb-2">{pkg.name}</h3>
                <p className="text-brand-blue font-medium mb-8 pb-8 border-b border-slate-100">{pkg.suitable}</p>
                <ul className="flex flex-col gap-4 mb-10 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-4 text-center rounded-xl font-bold transition-all ${pkg.popular ? 'bg-brand-blue hover:bg-brand-orange text-white shadow-lg shadow-brand-blue/30' : 'bg-slate-100 hover:bg-slate-200 text-brand-dark'}`}>
                  Select Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full hover:border-brand-blue hover:bg-white transition-colors cursor-default">
                  <Icon className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-slate-700">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. OUR MAINTENANCE PROCESS */}
      <section className="py-10 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Our Maintenance Process</h2>
            <p className="text-sm text-slate-400">A simple, transparent approach to property care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/50 transition-all duration-300 flex items-center gap-3">

                {/* Modern Badged Number */}
                <div className="w-9 h-9 shrink-0 bg-gradient-to-br from-brand-orange to-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {step.step}
                </div>

                <div className="flex-1">
                  <h3 className="text-[14px] font-bold text-white leading-tight">{step.title}</h3>
                  <p className="text-slate-400 text-[11px] leading-tight mt-1 line-clamp-2">
                    {idx === 0 && "Schedule an appointment online, via WhatsApp, or over the phone."}
                    {idx === 1 && "Our certified technicians arrive on-site to assess the issue."}
                    {idx === 2 && "Receive a transparent, no-obligation estimate with zero hidden fees."}
                    {idx === 3 && "Our experts execute the job safely, cleanly, and efficiently."}
                    {idx === 4 && "We conduct a strict post-work review to ensure high standards."}
                    {idx === 5 && "We guarantee our workmanship and ensure you are 100% happy."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CUSTOMERS CHOOSE US */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Why Customers Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-brand-blue mb-4" />
                <span className="font-bold text-slate-700 text-sm leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICE AREAS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-brand-blue mb-4">
            <MapPin className="w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Service Areas</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">We provide fast, reliable technical services across all major emirates in the UAE.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, idx) => (
              <span key={idx} className="px-6 py-3 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-wider text-sm shadow-md">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-brand-dark text-lg pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-brand-blue shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-3xl md:text-4xl font-bold leading-tight italic mb-8 text-slate-200">
            "Our villa maintenance has never been easier."
          </blockquote>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="font-bold text-lg">Happy Customer</p>
        </div>
      </section>

      {/* 12. CALL TO ACTION */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Looking for reliable property maintenance services?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your maintenance service today and let our experts keep your property in excellent condition.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-dark rounded-xl font-extrabold hover:bg-brand-orange hover:text-white transition-all shadow-xl hover:-translate-y-1">
              Get Free Quote
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-white/20 hover:border-white text-white rounded-xl font-extrabold transition-all hover:bg-white/10">
              Contact Us
            </Link>
            <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" className="px-10 py-5 bg-green-500 hover:bg-green-400 text-white rounded-xl font-extrabold transition-all flex items-center gap-2 shadow-xl hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Maintenance;
