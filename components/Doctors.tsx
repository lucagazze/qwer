import React from 'react';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="section section-bg">
      <div className="container">
        <div className="doctors-layout">
          {/* Text Content */}
          <div className="doctors-content">
            <h2 className="text-primary font-bold" style={{textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'1px', marginBottom:'0.5rem'}}>Conoce al Equipo</h2>
            <h3 style={{fontSize:'2.5rem', fontWeight:800, lineHeight:1.2, marginBottom:'1.5rem', color: 'var(--text-main)'}}>Atención Experta de Personas que se Preocupan</h3>
            <p style={{color:'var(--text-muted)', fontSize:'1.1rem', marginBottom:'1.5rem'}}>
              En Clínica Javier, creemos que el mejor cuidado dental proviene de un equipo que realmente escucha. Nuestros especialistas no solo están altamente capacitados en las últimas tecnologías dentales, sino que también se dedican a hacer que su visita sea lo más cómoda posible.
            </p>
            <p style={{color:'var(--text-muted)', marginBottom:'2rem'}}>
              Desde el momento en que cruzas nuestras puertas, sentirás la diferencia. Nos tomamos el tiempo para explicarte tus opciones.
            </p>
            <button className="btn btn-outline">
              Nuestra Historia
            </button>
          </div>

          {/* Team Grid */}
          <div className="doctors-grid">
            {/* Team Member 1 */}
            <div className="doctor-card">
              <img 
                alt="Dra. Sarah Smith, Dentista Principal" 
                className="doctor-img" 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=533"
                width="400"
                height="533"
                loading="lazy"
              />
              <div className="doctor-overlay">
                <h4 style={{fontSize:'1.25rem', fontWeight:700}}>Dra. Sarah Smith</h4>
                <p style={{color:'var(--primary)', fontWeight:600, fontSize:'0.9rem'}}>Dentista Principal</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="doctor-card" style={{marginTop:'3rem'}}>
              <img 
                alt="Dr. James Wilson, Ortodoncista" 
                className="doctor-img" 
                src="https://images.unsplash.com/photo-1622253692010-333f2da60a71?auto=format&fit=crop&q=80&w=400&h=533"
                width="400"
                height="533"
                loading="lazy"
              />
              <div className="doctor-overlay">
                <h4 style={{fontSize:'1.25rem', fontWeight:700}}>Dr. James Wilson</h4>
                <p style={{color:'var(--primary)', fontWeight:600, fontSize:'0.9rem'}}>Ortodoncista</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="doctor-card">
              <img 
                alt="Dra. Emily Chen, Odontopediatra" 
                className="doctor-img" 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=533"
                width="400"
                height="533"
                loading="lazy"
              />
              <div className="doctor-overlay">
                <h4 style={{fontSize:'1.25rem', fontWeight:700}}>Dra. Emily Chen</h4>
                <p style={{color:'var(--primary)', fontWeight:600, fontSize:'0.9rem'}}>Odontopediatra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;