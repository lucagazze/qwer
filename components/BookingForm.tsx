import React, { useState } from 'react';
import { AppointmentStatus } from '../types';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<AppointmentStatus>(AppointmentStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(AppointmentStatus.SUBMITTING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(AppointmentStatus.SUCCESS);
      setTimeout(() => {
        setStatus(AppointmentStatus.IDLE);
        setFormData({ name: '', email: '', phone: '', service: 'General Dentistry', date: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#101818] to-[#1b2525] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your smile?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Book your appointment today and take the first step towards a healthier, happier you.
          </p>

          {status === AppointmentStatus.SUCCESS ? (
             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-white/10 relative z-20">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
                <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                <p className="text-gray-300">We'll contact you shortly to confirm.</p>
                <button 
                  onClick={() => setStatus(AppointmentStatus.IDLE)}
                  className="mt-6 text-primary hover:text-white font-medium transition-colors"
                >
                  Book another
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                >
                  <option className="bg-gray-800">General Dentistry</option>
                  <option className="bg-gray-800">Orthodontics</option>
                  <option className="bg-gray-800">Cosmetic Dentistry</option>
                  <option className="bg-gray-800">Pediatric Dentistry</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={status === AppointmentStatus.SUBMITTING}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-primary/30 text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === AppointmentStatus.SUBMITTING ? 'Booking...' : 'Book Appointment'}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Or call us directly at <span className="text-white font-semibold">(555) 123-4567</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;