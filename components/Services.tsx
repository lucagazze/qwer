import React from 'react';

interface ServicesProps {
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const allServices = [
    {
      icon: 'dentistry',
      title: 'Odontología General',
      desc: 'Chequeos completos, limpiezas de higiene y cuidado preventivo.',
      features: ['Chequeos Regulares', 'Limpieza Profunda', 'Empastes']
    },
    {
      icon: 'orthopedics',
      title: 'Ortodoncia',
      desc: 'Brackets modernos y alineadores transparentes para una sonrisa perfecta.',
      features: ['Invisalign', 'Brackets Tradicionales', 'Retenedores']
    },
    {
      icon: 'auto_awesome',
      title: 'Cosmética Dental',
      desc: 'Blanqueamiento profesional y carillas para realzar tu belleza natural.',
      features: ['Blanqueamiento', 'Carillas', 'Diseño de Sonrisa']
    },
    {
      icon: 'child_care',
      title: 'Odontopediatría',
      desc: 'Cuidado suave y especializado para niños y adolescentes.',
      features: ['Primeras Visitas', 'Flúor', 'Selladores']
    },
    {
      icon: 'medical_services',
      title: 'Cirugía Oral',
      desc: 'Procedimientos quirúrgicos expertos con máxima comodidad.',
      features: ['Muelas del Juicio', 'Implantes', 'Injertos']
    },
    {
      icon: 'emergency',
      title: 'Atención de Urgencia',
      desc: 'Citas el mismo día para problemas dentales urgentes.',
      features: ['Dolor Agudo', 'Dientes Rotos', 'Infecciones']
    }
  ];

  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className={`section ${!limit ? 'section-bg' : ''}`}>
      <div className="container">
        {/* Visual Enhancement for Services Page */}
        {!limit && (
           <div style={{marginBottom: '4rem', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative', height: '300px'}}>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=400&fmt=webp"
                alt="Instrumentos dentales modernos"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                loading="lazy"
              />
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <h2 style={{color: 'white', fontSize: '2.5rem', fontWeight: 800, textAlign: 'center'}}>Excelencia en Cada Detalle</h2>
              </div>
           </div>
        )}

        <div className={`grid ${limit ? 'grid-3' : 'grid-3'}`}>
          {displayedServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span className="material-symbols-outlined" style={{fontSize: '32px'}} aria-hidden="true">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              {!limit && (
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="material-symbols-outlined" style={{color: 'var(--primary-dark)', fontSize: '18px'}} aria-hidden="true">check_small</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <a href="#" className="link-arrow" aria-label={`Saber más sobre ${service.title}`}>
                Saber Más <span className="material-symbols-outlined" style={{fontSize: '16px'}} aria-hidden="true">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;