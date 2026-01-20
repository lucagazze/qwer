import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string, isAnchor: boolean = false) => {
    setIsOpen(false);
    
    if (isAnchor) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(target);
    }
  };

  const navItems = [
    { label: 'Inicio', path: '/', isAnchor: false },
    { label: 'Servicios', path: '/services', isAnchor: false },
    { label: 'Equipo', path: 'doctors', isAnchor: true },
    { label: 'Testimonios', path: 'testimonials', isAnchor: true },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" aria-label="Clínica Javier Inicio">
            <div className="logo-icon">
              <span className="material-symbols-outlined" style={{fontSize: '28px'}} aria-hidden="true">dentistry</span>
            </div>
            <span>Clínica Javier</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.isAnchor)}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('booking', true)}
              className="btn btn-primary btn-header-cta"
            >
              <span className="material-symbols-outlined" style={{fontSize: '20px'}} aria-hidden="true">calendar_month</span>
              <span>Agendar Cita</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined" aria-hidden="true">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path, item.isAnchor)}
              className="mobile-link"
            >
              {item.label}
            </button>
          ))}
           <button
            onClick={() => handleNavClick('booking', true)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Agendar Cita
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;