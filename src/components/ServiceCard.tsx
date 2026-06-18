import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { ServiceDetail } from '../data/servicesData';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const LucideIcon = (Icons as any)[service.iconName] || Icons.Wrench;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Icon badge on the image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="p-2 bg-brand-blue rounded-lg text-white shadow-lg">
            <LucideIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Pricing badge */}
        <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/10">
          {service.pricing}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Stars */}
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
          ))}
          <span className="text-[11px] text-brand-slate ml-1 font-medium">5.0</span>
        </div>

        <h3 className="text-base font-bold text-brand-dark mb-1.5 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-brand-slate text-xs leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="flex-1 text-center py-2 bg-brand-blue hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors"
          >
            Book Now
          </Link>
          <Link
            to={`/services#${service.slug}`}
            className="px-3 py-2 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5 text-xs font-bold rounded-lg transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
