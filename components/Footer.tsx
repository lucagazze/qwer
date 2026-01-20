import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="grid grid-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div style={{display:'flex', alignItems:'center', gap:'0.5rem', fontWeight:'bold', fontSize:'1.1rem', color: 'var(--text-main)'}}>
              <div style={{width:'2rem', height:'2rem', background:'rgba(45, 212, 191, 0.15)', borderRadius:'0.25rem', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary-dark)'}}>
                <span className="material-symbols-outlined" style={{fontSize: '20px'}} aria-hidden="true">dentistry</span>
              </div>
              <span>Clínica Javier</span>
            </div>
            <p style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>
                Brindando cuidado dental suave y moderno para toda la familia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Equipo</a></li>
              <li><a href="#">Testimonios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-links">
              <li className="flex" style={{gap:'0.5rem'}}>
                <span className="material-symbols-outlined" style={{fontSize:'18px', color:'var(--primary-dark)'}} aria-hidden="true">location_on</span>
                <span>123 Wellness Blvd<br/>San Francisco, CA</span>
              </li>
              <li className="flex items-center" style={{gap:'0.5rem'}}>
                <span className="material-symbols-outlined" style={{fontSize:'18px', color:'var(--primary-dark)'}} aria-hidden="true">phone</span>
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="footer-heading">Horarios</h4>
            <ul className="footer-links">
              <li className="justify-between flex"><span>L-V</span> <span>8am - 6pm</span></li>
              <li className="justify-between flex"><span>Sáb</span> <span>9am - 2pm</span></li>
              <li className="justify-between flex"><span>Dom</span> <span style={{color:'var(--primary-dark)', fontWeight:'bold'}}>Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Clínica Javier. Todos los derechos reservados.</p>
          <div style={{display:'flex', gap:'1.5rem'}}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;