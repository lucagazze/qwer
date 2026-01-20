import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="section testimonials" 
      style={{
        position: 'relative',
        background: 'url(https://images.unsplash.com/photo-1600172454557-4d9f6768843d?auto=format&fit=crop&q=80&w=1600&fmt=webp) center/cover no-repeat',
        color: 'white',
        padding: '8rem 0'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(15, 118, 110, 0.9)', // Teal darken overlay
        zIndex: 1
      }}></div>

      <div className="container text-center" style={{position: 'relative', zIndex: 2}}>
        <div className="quote-icon" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>
          <span className="material-symbols-outlined" style={{fontSize: '32px'}}>format_quote</span>
        </div>
        <blockquote className="testimonial-text" style={{color: 'white'}}>
            "Antes me aterraba ir al dentista. El equipo de Clínica Javier cambió eso por completo. ¡Se sintió más como una visita al spa que una cita médica!"
        </blockquote>
        <div>
          <cite style={{fontStyle:'normal', fontSize:'1.125rem', fontWeight:'bold', display:'block'}}>Rebecca Morgan</cite>
          <span style={{color:'rgba(255,255,255,0.8)', fontSize:'0.9rem'}}>Paciente desde 2019</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;