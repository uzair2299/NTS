import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home, Building, Building2, Briefcase,
  CheckCircle2, ArrowRight, MessageCircle, Star, Plus, Minus,
  ShieldCheck, Check, Store, Utensils, Warehouse, GraduationCap, HeartPulse, Paintbrush,
  Layout, BedDouble, Bath, Factory
} from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

// --- DATA STRUCTURES ---
const services = [
  { icon: Home, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80', title: 'Residential Renovation', desc: 'Complete renovation solutions for villas, apartments, and homes.' },
  { icon: Building, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80', title: 'Villa Renovation', desc: 'Luxury villa upgrades including interiors, exteriors, and landscaping improvements.' },
  { icon: Building2, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80', title: 'Apartment Renovation', desc: 'Modern apartment remodeling with space optimization and premium finishes.' },
  { icon: Briefcase, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80', title: 'Office Renovation', desc: 'Create productive, modern workspaces with customized office renovations.' },
  { icon: Store, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', title: 'Commercial Renovation', desc: 'Renovation solutions for retail stores, restaurants, clinics, and commercial properties.' },
  { icon: Utensils, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80', title: 'Kitchen Remodeling', desc: 'Upgrade your kitchen with modern cabinets, countertops, lighting, and layouts.' },
  { icon: Bath, image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80', title: 'Bathroom Remodeling', desc: 'Transform bathrooms with new fixtures, tiles, showers, bathtubs, and vanities.' },
  { icon: BedDouble, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80', title: 'Interior Remodeling', desc: 'Improve layouts, ceilings, flooring, walls, and lighting to create stylish interiors.' },
  { icon: Paintbrush, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80', title: 'Exterior Renovation', desc: 'Enhance curb appeal with façade improvements, painting, outdoor upgrades, and repairs.' },
  { icon: Layout, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', title: 'Space Optimization', desc: 'Redesign interiors to maximize functionality, storage, and comfort.' },
];

const includedItems = [
  'Site Inspection', 'Renovation Planning', 'Interior Design Consultation',
  'Demolition Work', 'Masonry Work', 'Flooring Installation',
  'Ceiling Installation', 'Wall Finishing', 'Painting',
  'Carpentry', 'Electrical Upgrades', 'Plumbing Modifications',
  'Lighting Installation', 'Kitchen Renovation', 'Bathroom Renovation',
  'Final Cleaning', 'Quality Inspection'
];

const packages = [
  {
    name: 'Basic Renovation',
    suitable: 'Suitable for small upgrades',
    features: ['Painting', 'Minor Carpentry', 'Flooring Repairs', 'Fixture Replacement'],
    popular: false
  },
  {
    name: 'Standard Renovation',
    suitable: 'Ideal for apartments and offices',
    features: ['Kitchen Upgrades', 'Bathroom Remodeling', 'Ceiling Improvements', 'Flooring', 'Lighting'],
    popular: true
  },
  {
    name: 'Premium Renovation',
    suitable: 'Complete property transformation',
    features: ['Full Interior Remodeling', 'Structural Improvements', 'Luxury Finishes', 'Custom Carpentry', 'Smart Lighting', 'Project Management'],
    popular: false
  }
];

const propertyTypes = [
  { icon: Home, name: 'Villas' },
  { icon: Building2, name: 'Apartments' },
  { icon: Building, name: 'Townhouses' },
  { icon: Briefcase, name: 'Offices' },
  { icon: Store, name: 'Retail Stores' },
  { icon: Utensils, name: 'Restaurants' },
  { icon: Warehouse, name: 'Warehouses' },
  { icon: Factory, name: 'Commercial Buildings' },
  { icon: Building2, name: 'Hotels' },
  { icon: HeartPulse, name: 'Clinics' },
  { icon: GraduationCap, name: 'Educational Facilities' }
];

const processSteps = [
  { step: 1, title: 'Free Consultation' },
  { step: 2, title: 'Site Inspection' },
  { step: 3, title: 'Design & Planning' },
  { step: 4, title: 'Quotation Approval' },
  { step: 5, title: 'Project Execution' },
  { step: 6, title: 'Quality Inspection' },
  { step: 7, title: 'Project Handover' }
];

const reasons = [
  'Experienced Renovation Specialists', 'Custom Design Solutions', 'High-Quality Materials',
  'Transparent Pricing', 'On-Time Project Delivery', 'Skilled Multi-Trade Team',
  'Dedicated Project Management', 'Licensed & Insured', 'Modern Equipment', 'Customer Satisfaction Guaranteed'
];

const faqs = [
  { q: 'How long does a renovation project take?', a: 'Project timelines vary based on scope. A bathroom might take 1-2 weeks, while a full villa renovation can take several months. We provide a detailed schedule upfront.' },
  { q: 'Do you provide free site inspections?', a: 'Yes, we offer complimentary initial site inspections to accurately assess your space and understand your requirements before quoting.' },
  { q: 'Can you renovate occupied homes?', a: 'Yes. We take special precautions to minimize dust, noise, and disruption, working around your schedule to keep your home livable during phased renovations.' },
  { q: 'Do you handle approvals and permits if required?', a: 'Yes, we assist with all necessary municipality and developer (e.g., Nakheel, Emaar) approvals required for structural changes or major renovations.' },
  { q: 'Can I customize the renovation package?', a: 'Absolutely. All our packages are fully customizable. We tailor the scope, materials, and timeline to match your exact budget and vision.' },
  { q: 'What types of materials do you use?', a: 'We source premium, durable materials from trusted suppliers. We offer various tiers of finish qualities from standard to ultra-luxury.' },
  { q: 'Do you provide warranties on renovation work?', a: 'Yes, we provide comprehensive warranties on both workmanship and the materials supplied, giving you complete peace of mind.' },
  { q: 'Do you renovate both residential and commercial properties?', a: 'Yes! We have dedicated teams for luxury residential upgrades as well as commercial fit-outs for offices, retail, and hospitality.' }
];

export const Renovation: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1920&q=80"
            alt="Premium Renovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Renovation & Remodeling</span> Services in UAE
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Transform your home, villa, apartment, office, or commercial space with our complete renovation and remodeling solutions. From modern interiors to full property makeovers, we deliver high-quality craftsmanship tailored to your vision.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
              Get Free Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 hover:border-white text-white rounded-xl font-bold transition-all hover:bg-white/5">
              Request a Free Quote
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 hover:border-white text-white rounded-xl font-bold transition-all hover:bg-white/5">
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT OUR RENOVATION SERVICES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Transform Your Space with Expert Renovation Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're upgrading a single room or renovating an entire property, <strong>Experts Technical Services</strong> provides end-to-end renovation solutions across the UAE. Our experienced team manages every stage of the project—from planning and design to construction and final finishing—ensuring exceptional quality, timely delivery, and complete customer satisfaction.
          </p>
        </div>
      </section>

      {/* 3. OUR RENOVATION & REMODELING SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Our Renovation & Remodeling Services</h2>
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
                Our property renovation services cover all aspects of home and office transformation. Here is a checklist of our core capabilities.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold transition-all">
                Book a Consultation <ArrowRight className="w-5 h-5" />
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

      {/* 9. BEFORE & AFTER SHOWCASE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Before & After Showcase</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Drag the slider to see the dramatic transformations we've achieved across kitchens, bathrooms, and living spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Slider 1 */}
            <div>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Empty Shell"
                afterLabel="Furnished Interior"
              />
              <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Luxury Living Space</h3>
              <p className="text-slate-600 text-sm">Complete interior fit-out from an empty shell to a premium living room.</p>
            </div>
            {/* Slider 2 */}
            <div>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Outdated Kitchen"
                afterLabel="Modern Remodel"
              />
              <h3 className="text-xl font-bold text-brand-dark mt-6 mb-2">Modern Kitchen Remodel</h3>
              <p className="text-slate-600 text-sm">Complete teardown, new cabinetry, countertops, and premium lighting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RENOVATION PACKAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Renovation Packages ⭐</h2>
            <p className="text-lg text-slate-600">Choose a package that aligns with your property transformation goals.</p>
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

      {/* 7. OUR RENOVATION PROCESS (COMPACT) */}
      <section className="py-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Our Renovation Process</h2>
            <p className="text-sm text-slate-400">A seamless journey from concept to completion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/50 transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 bg-gradient-to-br from-brand-orange to-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-bold text-white leading-tight">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROPERTY TYPES WE RENOVATE / 10. INDUSTRIES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Property Types We Renovate</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {propertyTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full hover:border-brand-blue hover:shadow-md transition-all cursor-default">
                  <Icon className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-slate-700">{type.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-brand-blue mb-4" />
                <span className="font-bold text-slate-700 text-sm leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-blue/30">
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

      {/* 12. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-3xl md:text-4xl font-bold leading-tight italic mb-8 text-slate-200">
            "They completely transformed our dated villa into a modern masterpiece. The workmanship, communication, and timely delivery were exceptional."
          </blockquote>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="font-bold text-lg text-slate-300">Satisfied Villa Owner</p>
        </div>
      </section>

      {/* 13. CALL TO ACTION */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a modern kitchen, a luxury villa renovation, or a complete office makeover, our renovation experts are here to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-dark rounded-xl font-extrabold hover:bg-brand-orange hover:text-white transition-all shadow-xl hover:-translate-y-1">
              Request a Free Quote
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-white/20 hover:border-white text-white rounded-xl font-extrabold transition-all hover:bg-white/10">
              Schedule a Site Visit
            </Link>
            <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" className="px-10 py-5 bg-green-500 hover:bg-green-400 text-white rounded-xl font-extrabold transition-all flex items-center gap-2 shadow-xl hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" /> Contact Our Renovation Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Renovation;
