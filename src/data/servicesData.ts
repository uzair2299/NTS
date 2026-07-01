import paintWorksImg from '../assets/paint_works.jpeg';
import acServicesImg from '../assets/ac_services.jpeg';
import plumbingImg from '../assets/plumbing_services.png';

export interface ServiceDetail {
  title: string;
  iconName: string;
  slug: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
  pricing: string;
  highlights: string[];
}


export const servicesData: ServiceDetail[] = [
  {
    title: "AC Repair & Maintenance",
    iconName: "Wind",
    slug: "ac-repair-maintenance",
    imageUrl: acServicesImg,
    shortDescription: "Professional AC repair, deep coil cleaning, filter replacement, gas topping up, and installation for residential and commercial units across Dubai.",
    longDescription: "We provide top-notch air conditioning maintenance services in Dubai. Our certified team ensures your AC unit functions efficiently, reducing electricity bills and ensuring healthy air quality. From emergency cooling failures to annual contract servicing, we do it all.",
    bulletPoints: [
      "AC troubleshooting & compressor replacement",
      "Deep coil cleaning and filter washing",
      "Gas top-up (R22/R410a refrigerant)",
      "Thermostat repair & smart thermostat installation",
      "AC duct sanitization & odour removal",
      "Full unit installation & package system relocation"
    ],
    pricing: "From 150 AED",
    highlights: ["Always-On Urgent Assistance", "Certified HVAC technicians", "Genuine parts with warranty", "Prompt 30-min response"]
  },
  {
    title: "Plumbing Services",
    iconName: "Droplets",
    slug: "plumbing-services",
    imageUrl: plumbingImg,
    shortDescription: "Expert leakage repair, water heater replacement, blockage removal, and pipe installations.",
    longDescription: "Our professional plumbers in Dubai handle everything from minor household leaks to complete pipeline overhauls. We use advanced diagnostic leak-detection tools to resolve your plumbing issues instantly without damage to your structure.",
    bulletPoints: [
      "Water leak detection & pipe repair",
      "Water heater installation & replacement",
      "Water pump repair, servicing & installations",
      "Drain blockage removal (sinks, toilets, mains)",
      "Kitchen & bathroom sanitary ware installation",
      "Mixer tap, shower, and toilet flush repair"
    ],
    pricing: "From 120 AED",
    highlights: ["Advanced leak detection", "Emergency quick-fix", "No-mess execution", "Premium replacement parts"]
  },
  {
    title: "Painting Services",
    iconName: "Paintbrush",
    slug: "painting-services",
    imageUrl: paintWorksImg,
    shortDescription: "Premium interior and exterior wall painting for apartments, villas, and office spaces.",
    longDescription: "Transform your space with our premium painting services in Dubai. We cover interior, exterior, wallpaper installation, wall prep, and plastering to give your property a perfect, long-lasting finish using high-quality, eco-friendly paints.",
    bulletPoints: [
      "Apartment, villa & office interior painting",
      "Exterior wall stucco & weatherproofing painting",
      "Drywall repairing, plastering & crack filling",
      "Wallpaper removal and installation",
      "Wooden doors, cabinets, and pergola painting",
      "Professional color consultation & match"
    ],
    pricing: "From 999 AED",
    highlights: ["Eco-friendly, low-odour paints", "Meticulous surface preparation", "Furniture protection & post-clean", "1-year durability warranty"]
  },
  {
    title: "Electrical Services",
    iconName: "Zap",
    slug: "electrical-services",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Secure electrical wiring, DB box upgrades, lighting installation, and short-circuit troubleshooting.",
    longDescription: "Safe and reliable electrical solutions by certified Dubai electricians. We troubleshoot complex circuitry, repair DB boards, set up elegant lighting schemes, and install new fixtures in accordance with DEWA safety standards.",
    bulletPoints: [
      "Short-circuit and tripping troubleshooting",
      "Distribution board (DB) box maintenance & repairs",
      "Indoor & outdoor lighting installations",
      "Switch, socket, and dimmer repairs & additions",
      "Home automation & smart device installations",
      "Full load calculation & electrical safety audit"
    ],
    pricing: "From 130 AED",
    highlights: ["Certified DEWA-compliant electricians", "Safety-first execution protocols", "Rapid short-circuit response", "Commercial & residential support"]
  },
  {
    title: "Remodeling & Fit-out",
    iconName: "Layout",
    slug: "remodeling-fitout",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Full home & office renovation, bathroom remodeling, kitchen upgrades, tiling, and gypsum work.",
    longDescription: "Comprehensive interior remodeling and fit-out solutions in Dubai. From modernizing your bathroom or kitchen to custom gypsum partitions and flooring, we deliver exceptional craftsmanship tailored to your aesthetic choices.",
    bulletPoints: [
      "Complete bathroom renovation & tiling",
      "Kitchen cabinet remodeling & countertop upgrades",
      "Ceramic, porcelain, marble & SPC flooring",
      "Gypsum board false ceilings & decorative partitions",
      "Carpentry, custom wardrobe, and shelving setup",
      "Office fit-out & partition screen installations"
    ],
    pricing: "Free Site Survey & Quote",
    highlights: ["End-to-end project management", "3D design preview assistance", "Licensed engineers and craftsmen", "On-time delivery guarantee"]
  },
  {
    title: "General Maintenance & Handyman",
    iconName: "Wrench",
    slug: "general-maintenance-handyman",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Quick repairs, TV mounting, furniture assembly, door lock repair, and picture hanging.",
    longDescription: "Professional handyman services in Dubai for all those small, tricky tasks around the house. Our team comes fully equipped with the right tools to fix, mount, or install anything quickly and cleanly.",
    bulletPoints: [
      "TV wall mounting & bracket installation",
      "IKEA and custom furniture assembly",
      "Door lock, hinges, and handle replacements",
      "Picture frames, heavy mirror, and curtain rod hanging",
      "General minor carpentry & plaster touch-up",
      "Silicon sealant replacement for baths and sinks"
    ],
    pricing: "From 100 AED",
    highlights: ["Fully equipped mobile toolkits", "Flexible hourly billing", "Polite and professional handymen", "Mess-free post-cleanup"]
  },
  {
    title: "Carpenter Services",
    iconName: "Hammer",
    slug: "carpenter-services",
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Custom woodworking, furniture repair, door installation, and bespoke cabinetry solutions.",
    longDescription: "Our expert carpenters deliver high-quality woodwork tailored to your needs. From fixing broken furniture and installing wooden doors to creating custom cabinets and shelving, we ensure precision and durability in every project.",
    bulletPoints: [
      "Custom wardrobe and cabinet creation",
      "Door lock and hinge repairs",
      "Wooden flooring installation and repair",
      "Bespoke shelving and storage units",
      "Pergola and outdoor decking woodwork",
      "Furniture assembly and dismantling"
    ],
    pricing: "From 120 AED",
    highlights: ["Skilled master carpenters", "Premium quality wood and materials", "Custom designs available", "Timely project completion"]
  },
  {
    title: "Cleaning Services",
    iconName: "Sparkles",
    slug: "cleaning-services",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Comprehensive deep cleaning, move-in/move-out cleaning, and regular residential or commercial cleaning.",
    longDescription: "Maintain a spotless and hygienic environment with our professional cleaning services. Our trained staff uses eco-friendly products and advanced equipment for deep cleaning, post-construction cleanup, and regular maintenance for homes and offices.",
    bulletPoints: [
      "Deep cleaning for villas and apartments",
      "Move-in and move-out thorough cleaning",
      "Office and commercial space sanitization",
      "Sofa, carpet, and mattress shampooing",
      "Post-construction debris removal",
      "Kitchen and bathroom intensive hygiene cleaning"
    ],
    pricing: "From 35 AED/Hour",
    highlights: ["Trained and background-checked staff", "Eco-friendly cleaning supplies", "Flexible scheduling", "Satisfaction guaranteed"]
  }
];

export const companyDetails = {
  name: "Network Technical Services Experts",
  phone: "+971 55 512 0513",
  phoneSecondary: "+971 55 512 0513",
  email: "nts.experts@gmail.com",
  address: "WAREHOUSE # 31, LEADER CAMP 1 DIP 1 DUBAI",
  workingHours: "24/7 Customer Support and Service",
  whatsapp: "https://wa.me/971555120513"
};
