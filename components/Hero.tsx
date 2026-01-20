import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section id="hero" className="hero">
      {/* Background Blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined" style={{fontSize: '14px', fontWeight:'bold'}}>star</span>
              Aceptamos Pacientes Nuevos
            </div>
            
            <h1 className="hero-title">
              Odontología con un <span className="hero-highlight">
                Toque Suave
                <svg style={{position:'absolute', width:'100%', bottom:'-5px', left:0, height:'10px', color:'rgba(91, 200, 193, 0.3)'}} viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </span>
            </h1>
            
            <p className="hero-desc">
              Cuidado moderno en un ambiente tranquilo. Priorizamos tu comodidad y salud a largo plazo con un enfoque holístico del bienestar dental.
            </p>
            
            <div className="hero-actions">
              <button onClick={onBookNow} className="btn btn-primary">
                Agendar Visita
              </button>
              <button className="btn btn-outline">
                <span className="material-symbols-outlined" style={{color: 'var(--primary)'}}>play_circle</span>
                Tour Virtual
              </button>
            </div>
            
            <div style={{display:'flex', gap:'1.5rem', marginTop:'2rem', color:'var(--text-gray)', fontSize:'0.9rem', fontWeight:600}}>
              <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                <span className="material-symbols-outlined" style={{color: 'var(--primary)'}}>check_circle</span>
                <span>Seguros Aceptados</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                <span className="material-symbols-outlined" style={{color: 'var(--primary)'}}>check_circle</span>
                <span>Fines de Semana</span>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="hero-image-wrapper">
            <img 
              alt="Sonrisa brillante" 
              className="hero-image" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWAN2kYeVk8u7E4cwGiVVA2Tt0bKVEJcHcifuv6vdl9G-fOutq1D_mWjQ2ZRpFt1WzfTKQpzavPQgTLJtuLOY8gDdqvL_1EHps8X6Lsyv0U5K4vo_-9mHdg99RSQNaXuRufJWlD-pthq6EAEJJA-CKwcwsR7-QuLY_OGP3g_G5QE7tAiG44lPCGQhJZp-oG_pDP03-xMn-t7SshZCDaqYTqjISBRgr51c7CfP3KepukJ7pglE2dL40yX9b_7R1_2s7steZHc6jM5M"
              width="600"
              height="450"
              // @ts-ignore
              fetchpriority="high"
            />
            
            <div className="floating-stats">
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                 <div style={{display:'flex', flexDirection:'column'}}>
                    <span style={{fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.5px', opacity:0.7}}>Pacientes Felices</span>
                    <div style={{display:'flex', alignItems:'center', gap:'0.25rem'}}>
                       <strong style={{fontSize:'1.1rem'}}>4.9/5</strong>
                       <span className="material-symbols-outlined" style={{color:'#facc15', fontSize:'18px'}}>star</span>
                    </div>
                 </div>
              </div>
              <div style={{width:'2.5rem', height:'2.5rem', background:'rgba(91, 200, 193, 0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}>
                 <span className="material-symbols-outlined">favorite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;