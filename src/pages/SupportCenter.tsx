import React, { useEffect } from 'react';
import { Mail, Phone, LifeBuoy } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export const SupportCenter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <LifeBuoy className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Support Center</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're here to help. Whether you have a question about our services, need emergency maintenance, or want to follow up on a project, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Support Channels */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Support</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">24/7 Hotline</h4>
                  <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-brand-blue font-semibold hover:underline">{companyDetails.phone}</a>
                  <p className="text-sm text-slate-500 mt-1">Available for emergency repairs</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-brand-blue font-semibold hover:underline">{companyDetails.email}</a>
                  <p className="text-sm text-slate-500 mt-1">We aim to reply within 2 hours</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick FAQ */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Quick Help</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800">What is your response time?</h4>
                <p className="text-sm text-slate-600 mt-1">For emergencies, we aim to be on-site within 60 minutes across Dubai.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Do you offer warranties?</h4>
                <p className="text-sm text-slate-600 mt-1">Yes, all our maintenance and renovation works come with a minimum 1-year service guarantee.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">How do I book a site visit?</h4>
                <p className="text-sm text-slate-600 mt-1">You can call our hotline directly or book through our <a href="/contact" className="text-brand-blue hover:underline">Contact Page</a>.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportCenter;
