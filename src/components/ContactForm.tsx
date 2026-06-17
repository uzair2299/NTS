import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-brand-green/20 text-center flex flex-col items-center justify-center min-h-[400px] transition-all duration-500 animate-fadeIn">
        <CheckCircle2 className="w-16 h-16 text-brand-green mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-brand-dark mb-2">Quote Request Submitted!</h3>
        <p className="text-brand-slate max-w-md mb-6">
          Thank you for reaching out. Our technical estimator has received your details and will contact you via Phone/WhatsApp within <span className="font-bold text-brand-blue">15 to 30 minutes</span>.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-blue-600 transition-colors shadow-md shadow-brand-blue/20"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-brand-dark">Get a Free Instant Quote</h3>
        <p className="text-brand-slate text-sm mt-1">Fill out the form below, and we will contact you immediately.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-2.5 rounded-lg border text-brand-dark bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
              errors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-blue'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 50 XXXXXXX"
              className={`w-full px-4 py-2.5 rounded-lg border text-brand-dark bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                errors.phone ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-blue'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
              Email Address <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-2.5 rounded-lg border text-brand-dark bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-blue'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-dark mb-1">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border text-brand-dark bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
              errors.service ? 'border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-brand-blue'
            }`}
          >
            <option value="">Select a service</option>
            <option value="AC Repair & Maintenance">AC Repair & Maintenance</option>
            <option value="Plumbing Services">Plumbing Services</option>
            <option value="Painting Services">Painting Services</option>
            <option value="Electrical Services">Electrical Services</option>
            <option value="Remodeling & Fit-out">Remodeling & Fit-out</option>
            <option value="General Maintenance & Handyman">General Maintenance & Handyman</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
            Brief Project Details <span className="text-slate-400">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Describe your issue or renovation project requirements..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-brand-dark bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-600 focus:ring-4 focus:ring-brand-orange/30 transition-all shadow-md shadow-brand-orange/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-base"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending Details...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Request Free Estimate
            </>
          )}
        </button>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-slate">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>Your information is 100% private</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-brand-orange animate-pulse" />
            <span>Emergency MEP line: <a href="tel:+971589843344" className="font-bold text-brand-dark hover:underline">+971 58 984 3344</a></span>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
