import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container text-center">
        <div className="quote-icon">
          <span className="material-symbols-outlined" style={{fontSize: '32px'}}>format_quote</span>
        </div>
        <blockquote className="testimonial-text">
            "Antes me aterraba ir al dentista. El equipo de Clínica Javier cambió eso por completo. ¡Se sintió más como una visita al spa que una cita médica!"
        </blockquote>
        <div>
          <cite style={{fontStyle:'normal', fontSize:'1.125rem', fontWeight:'bold', display:'block'}}>Rebecca Morgan</cite>
          <span style={{color:'var(--text-gray)', fontSize:'0.9rem'}}>Paciente desde 2019</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;