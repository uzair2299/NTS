import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ShieldCheck, CheckCircle, Star, Sparkles, Clock, Users, Award } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Omar Al-Nuaimi",
      location: "Jumeirah Beach Residence (JBR), Dubai",
      text: "Excellent electrical and AC repair services. The technicians were skilled, fast, and cleaned up after they finished. I'm highly impressed by their professionalism and the immediate results.",
      rating: 5,
    },
    {
      name: "Aisha Al-Mansoori",
      location: "Downtown Dubai, UAE",
      text: "They did an amazing job remodeling my bathroom and painting the living room. They were respectful, organized, and finished right on time. My home looks fresh and comfortable — I'm very satisfied.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      location: "Dubai Marina, Dubai",
      text: "Had a plumbing emergency on a Friday night with a burst water pipe. They arrived within 30 minutes and resolved the issue immediately. Outstanding service, honest pricing!",
      rating: 5,
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Guaranteed Performance",
      description: "First-time-right assurance. If any issue occurs, we fix it with zero additional charge.",
    },
    {
      icon: ShieldCheck,
      title: "Certified & Accountable",
      description: "All technicians are licensed, vetted, and supervised by certified engineers.",
    },
    {
      icon: Sparkles,
      title: "Asset Value Focus",
      description: "Proactive care that prevents risk of damages, preserving the premium value of your property.",
    },
    {
      icon: Users,
      title: "All-in-One Solution",
      description: "Your single expert partner for MEP (Mechanical, Electrical, Plumbing) and fit-out renovations.",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brand-dark via-slate-900 to-brand-blue-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Decorative Light Blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
                Dubai's Most Trusted Maintenance Team
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Professional Home & Office <span className="text-brand-orange">Maintenance</span> Services
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Get premium AC repair, plumbing, painting, electrical, fit-out remodeling, and general maintenance in Dubai. Vetted technicians, DEWA-compliant procedures, and 24/7 service.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/30">
                  <Clock className="w-5 h-5 text-brand-orange" />
                  <span className="text-xs font-semibold">30-Min Response</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/30">
                  <ShieldCheck className="w-5 h-5 text-brand-green" />
                  <span className="text-xs font-semibold">Vetted Team</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/30 col-span-2 sm:col-span-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-xs font-semibold">4.9/5 Rating</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-blue text-white rounded-xl font-extrabold text-base transition-all hover:bg-brand-blue-600 shadow-lg shadow-brand-blue/30 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Phone className="w-5 h-5 animate-pulse text-brand-orange" />
                  Call Now: {companyDetails.phone}
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-base border border-slate-700 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-brand-orange" />
                  Book Instant Quote
                </Link>
              </div>
            </div>

            {/* Hero Right Media / Card Overlay */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl relative">
                <div className="absolute -top-3 -left-3 bg-brand-orange text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider animate-bounce">
                  Promo Offers Inside
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Why Dubai Residents Choose Us</h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">24/7 Availability</h4>
                      <p className="text-xs text-slate-400">Emergency support for AC breakdown & water leaks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Guaranteed Satisfaction</h4>
                      <p className="text-xs text-slate-400">Fixed right the first time, or it's free.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Transparent Pricing</h4>
                      <p className="text-xs text-slate-400">Clear estimates, no hidden service charges.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Approved Maintenance Partner</span>
                  <span className="text-xs font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-1 rounded-full">
                    DEWA Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Our Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              Premium Property Maintenance Solutions
            </h3>
            <p className="text-brand-slate mt-4 text-base leading-relaxed">
              We specialize in providing high-quality residential, commercial, and retail maintenance services across Al Barsha and Dubai.
            </p>
          </div>

          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-sm hover:bg-brand-blue-600 transition-colors shadow-md shadow-brand-blue/15"
            >
              Explore Detailed Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US BENEFITS */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-xs font-bold text-brand-orange uppercase tracking-widest">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
                High-Standard Workmanship You Can Trust
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                At Experts Technical Services, we operate under a strict code of professionalism. We understand that your home is your sanctuary, and your office is your growth driver. That is why we guarantee zero failures, timely work, and respectful service.
              </p>
              <div className="flex items-center gap-4 bg-brand-light p-4 rounded-xl border border-slate-100">
                <span className="text-3xl font-extrabold text-brand-blue">100%</span>
                <div className="text-xs">
                  <h4 className="font-bold text-brand-dark">Performance Guarantee</h4>
                  <p className="text-brand-slate">Quality checks and warranty on all MEP repairs.</p>
                </div>
              </div>
            </div>

            {/* Right Column Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-brand-light p-6 rounded-2xl border border-slate-100 space-y-3 hover:bg-white hover:shadow-lg transition-all duration-300 text-left">
                    <div className="p-2.5 bg-white rounded-xl w-fit text-brand-orange shadow-sm border border-slate-50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-brand-dark">{benefit.title}</h4>
                    <p className="text-brand-slate text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER PROJECT SHOWCASE */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-2">Our Transformations</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
              Before & After Project Gallery
            </h3>
            <p className="text-brand-slate mt-4 text-base leading-relaxed">
              Slide to compare our real painting, carpentry, and renovation jobs. See the difference quality materials and expert techniques make.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Slider 1 */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-dark text-left">Villa Living Room Painting & Wall Restoration</h4>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Before Painting"
                afterLabel="After Painting"
              />
              <p className="text-xs text-brand-slate text-left italic">
                Restored cracking plaster, applied primer, and finished with eco-friendly washable emulsion paint.
              </p>
            </div>

            {/* Slider 2 */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-brand-dark text-left">Modern Bathroom Remodeling & Tiling</h4>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
                beforeLabel="Outdated Tile Work"
                afterLabel="Premium Marble Finish"
              />
              <p className="text-xs text-brand-slate text-left italic">
                Completely replaced pipeline infrastructure, added waterproof underlayment, and installed premium ceramic marble tiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-sans">
              What Our Clients Say
            </h3>
            <p className="text-brand-slate mt-4 text-base">
              Verified reviews from residential and office owners across JBR, Downtown, Al Barsha, and other areas in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-brand-light p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-slate text-sm leading-relaxed italic text-left">
                    "{test.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200 mt-6 text-left">
                  <h4 className="font-bold text-brand-dark">{test.name}</h4>
                  <span className="text-xs text-brand-orange font-medium">{test.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section className="bg-brand-orange text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">Have a Maintenance Emergency or Planning a Renovation?</h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">
            Contact us right now! Our rapid response team will diagnose and fix your problem. Get a free site inspection and pricing estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-dark hover:bg-slate-900 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-brand-orange animate-bounce" />
              Call Now: {companyDetails.phone}
            </a>
            <a
              href={companyDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.179-.399-.369-.407-.54-.414-.141-.005-.304-.005-.467-.005-.163 0-.427.061-.65.306-.224.244-.854.834-.854 2.031s.874 2.35 1.002 2.502c.127.153 1.705 2.593 4.14 3.64.577.248 1.028.396 1.378.508.581.185 1.109.159 1.527.097.466-.07 1.427-.584 1.63-1.147.203-.562.203-1.045.142-1.147-.061-.101-.224-.163-.467-.285-.244-.122-1.427-.704-1.65-.785-.224-.081-.387-.122-.55.122-.163.244-.63.794-.772.956-.142.163-.285.183-.528.061-.244-.122-.962-.355-1.834-1.132-.677-.602-1.133-1.347-1.266-1.572-.132-.224-.014-.346.108-.466.11-.108.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.54-1.3-.74-1.785z"/>
              </svg>
              <span>Quick WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
