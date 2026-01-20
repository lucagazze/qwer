import React from 'react';

interface ServicesProps {
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const allServices = [
    {
      icon: 'dentistry',
      title: 'Odontología General',
      desc: 'Chequeos completos, limpiezas de higiene y cuidado preventivo diseñado para la salud a largo plazo de toda la familia.',
      features: ['Chequeos Regulares', 'Limpieza Profunda', 'Empastes y Selladores']
    },
    {
      icon: 'orthopedics',
      title: 'Ortodoncia',
      desc: 'Brackets modernos y alineadores transparentes diseñados para darte una sonrisa más recta, saludable y segura.',
      features: ['Invisalign', 'Brackets Tradicionales', 'Retenedores']
    },
    {
      icon: 'auto_awesome',
      title: 'Cosmética Dental',
      desc: 'Blanqueamiento profesional, carillas y adhesión para realzar la belleza natural de tus dientes y aumentar tu confianza.',
      features: ['Blanqueamiento Dental', 'Carillas de Porcelana', 'Diseño de Sonrisa']
    },
    {
      icon: 'child_care',
      title: 'Odontopediatría',
      desc: 'Cuidado suave y especializado para niños, asegurando que desarrollen hábitos saludables y una relación positiva con la salud dental.',
      features: ['Primeras Visitas', 'Tratamiento con Flúor', 'Selladores']
    },
    {
      icon: 'medical_services',
      title: 'Cirugía Oral',
      desc: 'Procedimientos quirúrgicos expertos, incluyendo extracciones e implantes, realizados con la máxima comodidad y seguridad.',
      features: ['Muelas del Juicio', 'Implantes Dentales', 'Injertos Óseos']
    },
    {
      icon: 'emergency',
      title: 'Atención de Urgencia',
      desc: 'Citas el mismo día para problemas dentales urgentes. Estamos aquí cuando más nos necesitas para aliviar el dolor.',
      features: ['Dolores de Muelas', 'Dientes Rotos', 'Empastes Perdidos']
    }
  ];

  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className={`section ${!limit ? 'section-bg' : ''}`}>
      <div className="container">
        <div className="grid grid-3">
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