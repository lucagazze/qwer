import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
        </div>
        <blockquote className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight mb-8">
            "I used to be terrified of the dentist. The team at Clinica Dental completely changed that. It felt more like a spa visit than a medical appointment!"
        </blockquote>
        <div className="flex flex-col items-center justify-center gap-2">
          <cite className="not-italic text-lg font-bold text-gray-900 dark:text-white">Rebecca Morgan</cite>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Patient since 2019</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;