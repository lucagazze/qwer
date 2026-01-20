import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string, isAnchor: boolean = false) => {
    setIsOpen(false);
    
    if (isAnchor) {
      // If we are not on home, go home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        // We need a small timeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // We are on home, just scroll
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // It's a page route
      navigate(target);
    }
  };

  const navItems = [
    { label: 'Home', path: '/', isAnchor: false },
    { label: 'Services', path: '/services', isAnchor: false },
    { label: 'Team', path: 'doctors', isAnchor: true },
    { label: 'Testimonials', path: 'testimonials', isAnchor: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">dentistry</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Clinica Vitalis</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.isAnchor)}
                className={`text-sm font-medium transition-colors ${
                   location.pathname === item.path 
                   ? 'text-primary' 
                   : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('booking', true)}
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Book Appointment</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.isAnchor)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              >
                {item.label}
              </button>
            ))}
             <button
              onClick={() => handleNavClick('booking', true)}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-bold py-3 px-6 rounded-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;