
import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { ServiceDetail } from '../data/servicesData';
import { ChevronRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically resolve the Lucide icon from the string
  const LucideIcon = (Icons as any)[service.iconName] || Icons.Wrench;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/10 flex flex-col justify-between h-full">
      <div>
        {/* Icon Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 bg-brand-blue/5 rounded-xl group-hover:bg-brand-blue/10 transition-colors">
            <LucideIcon className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
            {service.pricing}
          </span>
        </div>

        {/* Title and Short Description */}
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-brand-slate text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2.5 mb-6">
          {service.bulletPoints.slice(0, 3).map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-brand-slate">
              <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <Link
          to={`/services#${service.slug}`}
          className="text-xs font-bold text-brand-blue group-hover:text-brand-orange flex items-center gap-1 transition-colors"
        >
          View Details
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="px-3.5 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-lg hover:bg-brand-blue transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
