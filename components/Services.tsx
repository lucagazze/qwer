import React from 'react';

interface ServicesProps {
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const allServices = [
    {
      icon: 'dentistry',
      title: 'General Dentistry',
      desc: 'Comprehensive checkups, hygiene cleanings, and preventative care designed for the whole family\'s long-term health.',
      features: ['Regular Checkups', 'Deep Cleaning', 'Fillings & Sealants']
    },
    {
      icon: 'orthopedics',
      title: 'Orthodontics',
      desc: 'Modern braces and clear aligners designed to give you a straighter, healthier, and more confident smile.',
      features: ['Invisalign', 'Traditional Braces', 'Retainers']
    },
    {
      icon: 'auto_awesome',
      title: 'Cosmetic Dentistry',
      desc: 'Professional whitening, veneers, and bonding to enhance the natural beauty of your teeth and boost your confidence.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers']
    },
    {
      icon: 'child_care',
      title: 'Pediatric Dentistry',
      desc: 'Gentle, specialized care for children to ensure they develop healthy habits and a positive relationship with dental health.',
      features: ['First Visits', 'Fluoride Treatment', 'Sealants']
    },
    {
      icon: 'medical_services',
      title: 'Oral Surgery',
      desc: 'Expert surgical procedures including extractions and implants, performed with maximum comfort and safety in mind.',
      features: ['Wisdom Teeth', 'Dental Implants', 'Bone Grafting']
    },
    {
      icon: 'emergency',
      title: 'Emergency Care',
      desc: 'Same-day appointments for urgent dental issues. We are here when you need us most to relieve pain and fix problems.',
      features: ['Toothaches', 'Broken Teeth', 'Lost Fillings']
    }
  ];

  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className={`relative ${limit ? '' : 'py-12 bg-white dark:bg-background-dark'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {!limit && (
           <div className="text-center max-w-3xl mx-auto mb-16 hidden">
             {/* Header handled by parent page if not limited */}
           </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="group bg-background-light dark:bg-[#1b2027] p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{service.desc}</p>
              
              {!limit && (
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-primary text-[16px] mr-2">check_small</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline mt-auto">
                Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;