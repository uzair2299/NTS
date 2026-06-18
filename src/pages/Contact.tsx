import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-brand-dark to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact & Location</h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Get in touch with Network Technical Services Experts (NTS) today. We are available 24/7 for emergency plumbing &amp; AC repairs.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Cards & Map */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <h2 className="text-2xl font-extrabold text-brand-dark">How Can We Help You?</h2>
                <p className="text-brand-slate text-sm mt-2 leading-relaxed">
                  Call our emergency service hotline for sudden AC breakdowns or plumbing issues, or request a free project estimation by submitting the form.
                </p>
              </div>

              {/* Contact Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 space-y-2">
                  <Phone className="w-5 h-5 text-brand-orange" />
                  <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Call Hotline</h4>
                  <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-brand-blue hover:underline block">
                    {companyDetails.phone}
                  </a>
                  <a href={`tel:${companyDetails.phoneSecondary.replace(/\s+/g, '')}`} className="text-xs text-brand-slate block">
                    Alt: {companyDetails.phoneSecondary}
                  </a>
                </div>

                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 space-y-2">
                  <Mail className="w-5 h-5 text-brand-blue" />
                  <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Email Inquiry</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-sm font-semibold text-brand-blue hover:underline block truncate">
                    {companyDetails.email}
                  </a>
                  <span className="text-xs text-brand-slate block">General & contracts</span>
                </div>

                <div className="p-4 bg-brand-light rounded-xl border border-slate-100 space-y-2 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Office Location</h4>
                  <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                    {companyDetails.address}
                  </p>
                </div>
              </div>

              {/* Big WhatsApp CTA Card */}
              <div className="p-6 bg-brand-green/5 border border-brand-green/20 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="p-3 bg-brand-green text-white rounded-xl">
                  <MessageSquare className="w-7 h-7 fill-current" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-extrabold text-brand-dark text-base">Prefer WhatsApp?</h4>
                  <p className="text-brand-slate text-xs mt-0.5">Chat with our coordinator for scheduling and quick picture uploads.</p>
                </div>
                <a
                  href={companyDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
                >
                  Start Chat
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[220px] md:h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14445.89240465494!2d55.1979929871582!3d25.11973499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc063f114fb%3A0xe5a7acba16d90cf1!2sAl%20Barsha%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1718640000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Network Technical Services Experts Office Map"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
