import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow w-full">
        <Hero onBookNow={() => handleNavigate('booking')} />
        <Services />
        <Doctors />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;