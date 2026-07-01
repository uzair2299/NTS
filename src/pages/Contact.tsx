import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Zap, Clock, Send, CheckCircle } from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="animate-fadeIn">

      {/* ── PAGE HERO BANNER ──────────────────────────────────────────── */}
      <section className="relative bg-brand-dark text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Contact &amp; <span className="text-brand-blue">Location</span>
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                Get in touch with Network Technical Services Experts (NTS) today.
                We provide Always-On Urgent Assistance for plumbing &amp; AC repairs.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  {companyDetails.phone}
                </a>
                <a
                  href={companyDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-brand-blue text-white rounded-xl font-bold text-sm transition-all hover:bg-white/5"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Right: quick contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: 'Call Hotline', value: companyDetails.phone, sub: companyDetails.phoneSecondary, href: `tel:${companyDetails.phone.replace(/\s+/g, '')}`, color: 'text-brand-blue' },
                { icon: Mail, label: 'Email Us', value: companyDetails.email, sub: 'General & contracts', href: `mailto:${companyDetails.email}`, color: 'text-brand-blue' },
                { icon: MapPin, label: 'Office', value: companyDetails.address, sub: 'DIP 1, Dubai', href: '#map', color: 'text-brand-blue' },
                { icon: Clock, label: 'Support', value: '24/7 Customer Support', sub: 'and Service', href: '#', color: 'text-brand-blue' },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <a
                    key={i}
                    href={card.href}
                    className="group flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <div className="p-2 bg-brand-blue/20 group-hover:bg-brand-blue rounded-lg transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">{card.label}</div>
                      <div className="text-sm font-bold text-white truncate">{card.value}</div>
                      <div className="text-xs text-slate-400 truncate">{card.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />
      </section>

      {/* ── CONTACT FORM + MAP ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Map + WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-brand-blue mb-2">
                  <div className="w-6 h-0.5 bg-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest">Find Us</span>
                </div>
                <h2 className="text-2xl font-extrabold text-brand-dark">Our Office Location</h2>
                <p className="text-brand-slate text-sm mt-1">{companyDetails.address}</p>
              </div>

              {/* Google Maps */}
              <div id="map" className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-64 md:h-80">
                <iframe
                  src="https://maps.google.com/maps?q=WAREHOUSE%20%23%2031%2C%20LEADER%20CAMP%201%20DIP%201%20DUBAI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Network Technical Services Experts Office Map"
                />
              </div>

              {/* WhatsApp CTA card */}
              <div className="p-5 bg-brand-green/5 border border-brand-green/20 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-brand-green text-white rounded-xl shrink-0">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-brand-dark text-sm">Prefer WhatsApp?</h4>
                  <p className="text-brand-slate text-xs mt-0.5">Chat for scheduling and quick picture uploads.</p>
                </div>
                <a
                  href={companyDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold text-xs shadow-md transition-all shrink-0"
                >
                  Start Chat
                </a>
              </div>

              {/* Contact info strip */}
              <div className="space-y-3">
                {[
                  { icon: Phone, label: 'Primary', value: companyDetails.phone, href: `tel:${companyDetails.phone.replace(/\s+/g, '')}` },
                  { icon: Phone, label: 'Alternate', value: companyDetails.phoneSecondary, href: `tel:${companyDetails.phoneSecondary.replace(/\s+/g, '')}` },
                  { icon: Mail, label: 'Email', value: companyDetails.email, href: `mailto:${companyDetails.email}` },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 p-3 bg-brand-light rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:bg-white transition-all group"
                    >
                      <div className="p-2 bg-brand-blue/10 rounded-lg group-hover:bg-brand-blue transition-colors">
                        <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</div>
                        <div className="text-sm font-bold text-brand-dark">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-dark rounded-2xl p-8 shadow-2xl">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-brand-blue mb-2">
                    <div className="w-6 h-0.5 bg-brand-blue" />
                    <span className="text-xs font-bold uppercase tracking-widest">Book Inspection</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">Request a Free Quote</h2>
                  <p className="text-slate-400 text-sm mt-1">Fill in the form and our team will reach you within 30 minutes.</p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <div className="p-4 bg-brand-green/20 rounded-full">
                      <CheckCircle className="w-10 h-10 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Request Sent!</h3>
                    <p className="text-slate-400 text-sm">Our team will contact you within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 000 0000"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Service Required *</label>
                      <select
                        required
                        value={form.service}
                        onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue text-white rounded-xl text-sm focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-brand-dark">Select a Service</option>
                        {servicesData.map(s => (
                          <option key={s.slug} value={s.title} className="bg-brand-dark">{s.title}</option>
                        ))}
                        <option value="General Inquiry" className="bg-brand-dark">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Message / Details</label>
                      <textarea
                        rows={4}
                        placeholder="Describe the issue or work needed..."
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-brand-blue hover:bg-brand-blue-700 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Book Now — Free Inspection
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      We respond within 30 minutes · No spam, ever
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
