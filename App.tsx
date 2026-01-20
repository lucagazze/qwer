import React, { useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy Load heavy components
const Services = React.lazy(() => import('./components/Services'));
const Doctors = React.lazy(() => import('./components/Doctors'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const BookingForm = React.lazy(() => import('./components/BookingForm'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Loading placeholder to prevent layout shift during lazy load
const SectionLoader = () => (
  <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
    Cargando...
  </div>
);

const HomePage: React.FC = () => {
  const handleBookNow = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onBookNow={handleBookNow} />
      
      <section className="section">
        <div className="container text-center" style={{marginBottom: '3rem'}}>
          <h2 className="text-primary font-bold" style={{textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'1px', marginBottom:'0.5rem'}}>Lo Que Hacemos</h2>
          <h3 style={{fontSize:'2rem', fontWeight:800}}>Nuestros Servicios Principales</h3>
        </div>
        <Suspense fallback={<SectionLoader />}>
          <Services limit={3} />
        </Suspense>
        <div className="text-center" style={{marginTop:'3rem'}}>
           <a href="/#/services" className="link-arrow">
             Ver Todos los Servicios <span className="material-symbols-outlined" style={{fontSize: '16px'}}>arrow_forward</span>
           </a>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <Doctors />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <BookingForm />
      </Suspense>
    </>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div>
      <div className="section section-bg text-center">
        <h1 style={{fontSize:'3rem', fontWeight:800, marginBottom:'1rem'}}>Nuestros Servicios</h1>
        <p style={{maxWidth:'600px', margin:'0 auto', color:'var(--text-gray)', fontSize:'1.1rem'}}>
          La tecnología de vanguardia se encuentra con el cuidado compasivo.
        </p>
      </div>
      <Suspense fallback={<SectionLoader />}>
        <Services /> 
      </Suspense>
      <div className="section text-center">
        <h3 style={{fontSize:'2rem', fontWeight:700, marginBottom:'1.5rem'}}>¿Necesitas un plan personalizado?</h3>
        <button 
           onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
           className="btn btn-primary"
        >
          Contáctanos Hoy
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <Header />
        <main style={{flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;