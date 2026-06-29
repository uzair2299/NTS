import React, { useState, useEffect } from 'react';
import ntsLogo from '../assets/nts_logo.jpeg';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Maintenance Services', path: '/services/maintenance' },
        { name: 'Renovation & Remodeling', path: '/services#renovation' },
        { name: 'Painting Services', path: '/services#painting' },
        { name: 'HVAC (Air Conditioning) Services', path: '/services#hvac' },
        { name: 'Electrical Services', path: '/services#electrical' },
        { name: 'Plumbing Services', path: '/services#plumbing' },
        { name: 'Carpentry Services', path: '/services#carpentry' },
        { name: 'Waterproofing & Leak Repair', path: '/services#waterproofing' },
        { name: 'Fit-Out Services', path: '/services#fitout' },
        { name: 'Outdoor & Landscaping Services', path: '/services#landscaping' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ── Main Navbar — dark background ─────────────────────────────── */}
      <header
        style={{ position: 'sticky', top: 0, zIndex: 40 }}
        className={`w-full border-b border-white/20 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/98 backdrop-blur-md shadow-xl shadow-black/40 py-3'
            : 'bg-brand-dark py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={ntsLogo}
                alt="NTS — Network Technical Services Experts"
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 relative py-2 ${
                      isActive(link.path)
                        ? 'text-brand-blue'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* animated underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-300 ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-100 py-3 relative">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="block px-6 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Search icon */}
              <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>

              {/* Emergency red button */}
              <a
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-brand-blue/25 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span className="hidden lg:inline">Emergency</span>
              </a>

              {/* Get Quote outline button */}
              <Link
                to="/contact"
                className="px-4 py-2.5 border border-white/20 hover:border-brand-blue text-slate-300 hover:text-white rounded-xl font-bold text-sm transition-all hover:bg-white/5"
              >
                Get Quote
              </Link>
            </div>

            {/* Hamburger – mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{ zIndex: 9998 }}
        className={`fixed inset-0 bg-black/70 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        style={{ zIndex: 9999 }}
        className={`fixed top-0 right-0 h-full w-80 max-w-[88vw] bg-brand-dark shadow-2xl
          flex flex-col md:hidden transition-transform duration-300 ease-in-out border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={ntsLogo}
              alt="NTS — Network Technical Services Experts"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-brand-blue'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="flex flex-col pl-6 pr-2 mt-1 mb-2 gap-1 border-l-2 border-white/5 ml-4">
                  {link.subLinks.map(sub => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="py-2.5 px-3 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="px-5 py-5 border-t border-white/10 bg-black/20 shrink-0 flex flex-col gap-3">
          <a
            href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-blue hover:bg-brand-orange text-white rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>Call: {companyDetails.phone}</span>
          </a>
          <a
            href={companyDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.179-.399-.369-.407-.54-.414-.141-.005-.304-.005-.467-.005-.163 0-.427.061-.65.306-.224.244-.854.834-.854 2.031s.874 2.35 1.002 2.502c.127.153 1.705 2.593 4.14 3.64.577.248 1.028.396 1.378.508.581.185 1.109.159 1.527.097.466-.07 1.427-.584 1.63-1.147.203-.562.203-1.045.142-1.147-.061-.101-.224-.163-.467-.285-.244-.122-1.427-.704-1.65-.785-.224-.081-.387-.122-.55.122-.163.244-.63.794-.772.956-.142.163-.285.183-.528.061-.244-.122-.962-.355-1.834-1.132-.677-.602-1.133-1.347-1.266-1.572-.132-.224-.014-.346.108-.466.11-.108.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.54-1.3-.74-1.785z" />
            </svg>
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
