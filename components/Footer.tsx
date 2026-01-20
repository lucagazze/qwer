import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="grid grid-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div style={{display:'flex', alignItems:'center', gap:'0.5rem', fontWeight:'bold', fontSize:'1.1rem'}}>
              <div style={{width:'2rem', height:'2rem', background:'rgba(91,200,193,0.15)', borderRadius:'0.25rem', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)'}}>
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>dentistry</span>
              </div>
              <span>Clínica Javier</span>
            </div>
            <p style={{fontSize:'0.9rem', color:'var(--text-gray)'}}>
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
                <span className="material-symbols-outlined" style={{fontSize:'18px', color:'var(--primary)'}}>location_on</span>
                <span>123 Wellness Blvd<br/>San Francisco, CA</span>
              </li>
              <li className="flex items-center" style={{gap:'0.5rem'}}>
                <span className="material-symbols-outlined" style={{fontSize:'18px', color:'var(--primary)'}}>phone</span>
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
              <li className="justify-between flex"><span>Dom</span> <span style={{color:'var(--primary)'}}>Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Clínica Javier. Todos los derechos reservados.</p>
          <div style={{display:'flex', gap:'1.5rem'}}>
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;