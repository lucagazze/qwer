import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900/50 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Comprehensive Care for Every Smile</h3>
          <p className="text-gray-600 dark:text-gray-300">We offer a full range of dental treatments, from preventative care to complex restorative procedures, all under one roof.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">dentistry</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">General Dentistry</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Comprehensive checkups, hygiene cleanings, and preventative care designed for the whole family's long-term health.</p>
            <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
              Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </a>
          </div>

          {/* Service 2 */}
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">orthopedics</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Orthodontics</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Modern braces and clear aligners designed to give you a straighter, healthier, and more confident smile.</p>
            <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
              Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </a>
          </div>

          {/* Service 3 */}
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cosmetic Dentistry</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Professional whitening, veneers, and bonding to enhance the natural beauty of your teeth and boost your confidence.</p>
            <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
              Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;