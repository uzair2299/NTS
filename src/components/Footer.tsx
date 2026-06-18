import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck, Clock, Send } from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our maintenance newsletter!');
  };

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Bio */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-brand-blue rounded-lg text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-wider">NTS</span>
              <span className="text-[10px] font-bold tracking-widest text-brand-blue ml-1">NETWORK TECH SERVICES</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Dubai's premium residential and commercial technical maintenance provider. First-time-right assurance for AC, plumbing, electrical, painting, and remodeling work.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
                DEWA Approved
              </span>
              <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-lg">
                24/7 Support
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-brand-blue pl-3">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Detailed Services List
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-brand-orange pl-3">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-brand-green pl-3">Contact Details</h4>
            <ul className="space-y-3.5 text-sm mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-slate-400">{companyDetails.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white truncate">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-brand-green shrink-0" />
                <span>{companyDetails.workingHours}</span>
              </li>
            </ul>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="bg-slate-800 text-white placeholder-slate-500 px-3 py-2 rounded-lg text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-blue border border-transparent"
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-blue-600 text-white p-2 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {companyDetails.name}. All Rights Reserved. Redesigned with conversion optimization.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Support Center
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
