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
    <section id="services" className={`relative ${limit ? '' : 'py-12 bg-white dark:bg-background-dark'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="group bg-background-light dark:bg-[#1b2027] p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{service.desc}</p>
              
              {!limit && (
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-primary text-[16px] mr-2">check_small</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline mt-auto">
                Saber Más <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;