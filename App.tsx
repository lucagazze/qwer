import React, { useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

// Lazy load the Chatbot because it imports the heavy Google GenAI SDK
// This moves the JS out of the main bundle, speeding up initial load significantly
const AIChatBot = React.lazy(() => import('./components/AIChatBot'));

// ScrollToTop component ensures the page starts at the top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Components
const HomePage: React.FC = () => {
  const handleBookNow = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onBookNow={handleBookNow} />
      {/* We show a preview of services on Home */}
      <section className="py-20 bg-white dark:bg-gray-900/50">
        <div className="text-center mb-10">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Lo Que Hacemos</h2>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nuestros Servicios Principales</h3>
        </div>
        <Services limit={3} />
        <div className="text-center mt-10">
           <a href="/#/services" className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:underline">
             Ver Todos los Servicios <span className="material-symbols-outlined text-sm">arrow_forward</span>
           </a>
        </div>
      </section>
      <Doctors />
      <Testimonials />
      <BookingForm />
    </>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div>
      <div className="bg-primary/5 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          La tecnología de vanguardia se encuentra con el cuidado compasivo. Explora nuestra gama completa de tratamientos dentales.
        </p>
      </div>
      <Services /> 
      <div className="py-20 bg-gray-50 dark:bg-background-dark text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿Necesitas un plan de tratamiento personalizado?</h3>
        <button 
           onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
           className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
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
      <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <AIChatBot />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;