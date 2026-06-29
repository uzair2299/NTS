import React from 'react';
import { Star } from 'lucide-react';

const allTestimonials = [
  {
    name: "Omar Al-Futtaim",
    role: "Villa Owner, Jumeirah",
    text: "NTS completely overhauled our villa's AC system before the summer heat hit. The technicians were professional, punctual, and left everything spotless.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Resident, Dubai Marina",
    text: "We had a massive plumbing emergency at 2 AM. Their 24/7 team arrived within 30 minutes and saved our apartment from flooding. Absolute lifesavers!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Ahmed Mansoori",
    role: "Restaurant Manager, Downtown Dubai",
    text: "Reliable MEP maintenance is critical for our business. NTS provides top-tier electrical and plumbing contracts that keep our operations running smoothly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "David Robertson",
    role: "Property Manager, Al Barsha",
    text: "I rely on them for all my tenants' maintenance needs. From fresh painting to intricate carpentry, their workmanship is always guaranteed first-time-right.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Fatima Al-Hosani",
    role: "Homeowner, Arabian Ranches",
    text: "The bathroom remodeling team was fantastic. They managed the tiling and sanitary ware installation perfectly. High quality and transparent pricing.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Michael Chang",
    role: "Office Admin, Business Bay",
    text: "NTS handles our annual office maintenance. Finding a DEWA-compliant and fully certified team in Dubai that you can trust is hard, but NTS delivers every time.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="flex-shrink-0 w-[350px] p-8 bg-[#f4f7fb] rounded-2xl mx-3 hover:-translate-y-1 transition-transform duration-300">
      <div className="text-4xl text-brand-blue font-serif leading-none mb-4 opacity-70">"</div>
      <p className="text-slate-700 text-[15px] font-medium leading-relaxed mb-6 h-[80px]">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-brand-dark text-[15px]">{testimonial.name}</h4>
          <span className="text-xs text-slate-500 font-medium">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsMarquee: React.FC = () => {
  // Split testimonials for two rows
  const row1 = [...allTestimonials.slice(0, 3), ...allTestimonials.slice(0, 3)];
  const row2 = [...allTestimonials.slice(3, 6), ...allTestimonials.slice(3, 6)];

  // We need to duplicate the content within each row so that it can loop seamlessly.
  // The animation will move it by -100% of the inner container's width.
  // Actually, standard way is to duplicate the list itself in the flex container.

  return (
    <section className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">


        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark max-w-2xl mx-auto leading-tight">
          Words of praise from others about our presence.
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-6 relative w-full overflow-hidden">
        {/* Left and Right Fade Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Right to Left) */}
        <div className="flex group w-fit hover:[animation-play-state:paused]">
          <div className="flex animate-marquee-left">
            {row1.map((test, i) => (
              <TestimonialCard key={`r1-a-${i}`} testimonial={test} />
            ))}
          </div>
          <div className="flex animate-marquee-left" aria-hidden="true">
            {row1.map((test, i) => (
              <TestimonialCard key={`r1-b-${i}`} testimonial={test} />
            ))}
          </div>
          {/* Third copy for seamless extra width padding on large screens */}
          <div className="flex animate-marquee-left" aria-hidden="true">
            {row1.map((test, i) => (
              <TestimonialCard key={`r1-c-${i}`} testimonial={test} />
            ))}
          </div>
        </div>

        {/* Row 2 (Left to Right) */}
        <div className="flex group w-fit hover:[animation-play-state:paused]">
          {/* For reverse, we move from left to right */}
          <div className="flex animate-marquee-right">
            {row2.map((test, i) => (
              <TestimonialCard key={`r2-a-${i}`} testimonial={test} />
            ))}
          </div>
          <div className="flex animate-marquee-right" aria-hidden="true">
            {row2.map((test, i) => (
              <TestimonialCard key={`r2-b-${i}`} testimonial={test} />
            ))}
          </div>
          {/* Third copy */}
          <div className="flex animate-marquee-right" aria-hidden="true">
            {row2.map((test, i) => (
              <TestimonialCard key={`r2-c-${i}`} testimonial={test} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
