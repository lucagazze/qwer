import React from 'react';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="section section-bg">
      <div className="container">
        <div className="doctors-layout">
          {/* Text Content */}
          <div className="doctors-content">
            <h2 className="text-primary font-bold" style={{textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'1px', marginBottom:'0.5rem'}}>Conoce al Equipo</h2>
            <h3 style={{fontSize:'2.5rem', fontWeight:800, lineHeight:1.2, marginBottom:'1.5rem'}}>Atención Experta de Personas que se Preocupan</h3>
            <p style={{color:'var(--text-gray)', fontSize:'1.1rem', marginBottom:'1.5rem'}}>
              En Clínica Javier, creemos que el mejor cuidado dental proviene de un equipo que realmente escucha. Nuestros especialistas no solo están altamente capacitados en las últimas tecnologías dentales, sino que también se dedican a hacer que su visita sea lo más cómoda posible.
            </p>
            <p style={{color:'var(--text-gray)', marginBottom:'2rem'}}>
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
                alt="Dr. Sarah Smith" 
                className="doctor-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF6yKOwEs0iWoqmMENyoSI9EnTPTSj20Cz1Z4rNwh9LlnzBdw5eV-n0yKVbzRS6vtuynq3iNf7NzxMV1ommbCz0bJOQaK4FzLSOQ-8QTfZn5h03Xm3ZJ3CaFkbqWlR-8ndz2eYxMwjGJfrH94wnP4Sv5BzkBAGJ9b7iGblOD-KkYHd2vr8jTbNFdEbNLGiajzAPm43ekMvL_ECR2R6zvyXgnMOiC2Q6SmunLoEjTHz5G--18catc2ig_In-4CaWG4zNSVZ07cTLfo"
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
                alt="Dr. James Wilson" 
                className="doctor-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLMafKeuar8f-vLA5IoEN3TRojHswkalkhOYbY4neX1ScXhL8kRTCLfugCH2SKxShYizkKdOTBwBFw89VaRW83jwvBbzsZGSoZoJwgr0lFNbSsvlxq4jLZ67PyixXGhtA2YEC3p05nRUUNU9ukUGFuMlOv5KIdGRYjJznFm-k5xVQVf0jVkM7rxAOKzG53sZTvi3RUCuc-mS2efBXqaSEpyv5qNFNzQNjOjBPSBXW0fDCW1qT232jv_apopyl35a7C4VxgGg4I9g"
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
                alt="Dra. Emily Chen" 
                className="doctor-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD99qGNEIi523mlEntf3-yU2_SFFoD7J930B1YoiVr8e4lvjUSs6tJJZr5yQYn5WrKxdYA4FFnka4GMG7o-4t590oWltwTTQrcTvpOgYW0kTQK0rojcB1Tudu8T1CLSazT_voHVGbRU3k17b5YZVHSrNmIlkkuVbpUqePtZXCupqIHqCeTNTXQ4gicJxt6q1UbZZxw2PlPmcXphXE25bsHbJanIP-q325fCMFFVH8TE29qVygX2lRMdfK76FZE6-fVUWR_41J10QC4"
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