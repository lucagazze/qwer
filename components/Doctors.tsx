import React from 'react';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-[#fafafa] dark:bg-[#1b2027]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="flex-1 lg:sticky lg:top-24">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Conoce al Equipo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Atención Experta de Personas que se Preocupan</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              En Clínica Javier, creemos que el mejor cuidado dental proviene de un equipo que realmente escucha. Nuestros especialistas no solo están altamente capacitados en las últimas tecnologías dentales, sino que también se dedican a hacer que su visita sea lo más cómoda posible.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desde el momento en que cruzas nuestras puertas, sentirás la diferencia. Nos tomamos el tiempo para explicarte tus opciones, responder tus preguntas y crear un plan de tratamiento que se adapte a tu vida.
            </p>
            <button className="bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary font-bold py-3 px-8 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/5">
              Nuestra Historia
            </button>
          </div>

          {/* Team Grid */}
          <div className="flex-[1.5] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Team Member 1 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200">
                <img 
                  alt="Dr. Sarah Smith smiling in dental scrubs" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF6yKOwEs0iWoqmMENyoSI9EnTPTSj20Cz1Z4rNwh9LlnzBdw5eV-n0yKVbzRS6vtuynq3iNf7NzxMV1ommbCz0bJOQaK4FzLSOQ-8QTfZn5h03Xm3ZJ3CaFkbqWlR-8ndz2eYxMwjGJfrH94wnP4Sv5BzkBAGJ9b7iGblOD-KkYHd2vr8jTbNFdEbNLGiajzAPm43ekMvL_ECR2R6zvyXgnMOiC2Q6SmunLoEjTHz5G--18catc2ig_In-4CaWG4zNSVZ07cTLfo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white text-xl font-bold">Dra. Sarah Smith</h4>
                  <p className="text-primary text-sm font-medium mb-2">Dentista Principal</p>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm">Especialista en odontología reconstructiva con 15 años de experiencia.</p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 mt-0 sm:mt-12">
                <img 
                  alt="Dr. James Wilson smiling in a white coat" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLMafKeuar8f-vLA5IoEN3TRojHswkalkhOYbY4neX1ScXhL8kRTCLfugCH2SKxShYizkKdOTBwBFw89VaRW83jwvBbzsZGSoZoJwgr0lFNbSsvlxq4jLZ67PyixXGhtA2YEC3p05nRUUNU9ukUGFuMlOv5KIdGRYjJznFm-k5xVQVf0jVkM7rxAOKzG53sZTvi3RUCuc-mS2efBXqaSEpyv5qNFNzQNjOjBPSBXW0fDCW1qT232jv_apopyl35a7C4VxgGg4I9g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white text-xl font-bold">Dr. James Wilson</h4>
                  <p className="text-primary text-sm font-medium mb-2">Ortodoncista</p>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm">Experto en Invisalign y brackets transparentes para adolescentes y adultos.</p>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200">
                <img 
                  alt="Dr. Emily Chen smiling with dental tools in background" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD99qGNEIi523mlEntf3-yU2_SFFoD7J930B1YoiVr8e4lvjUSs6tJJZr5yQYn5WrKxdYA4FFnka4GMG7o-4t590oWltwTTQrcTvpOgYW0kTQK0rojcB1Tudu8T1CLSazT_voHVGbRU3k17b5YZVHSrNmIlkkuVbpUqePtZXCupqIHqCeTNTXQ4gicJxt6q1UbZZxw2PlPmcXphXE25bsHbJanIP-q325fCMFFVH8TE29qVygX2lRMdfK76FZE6-fVUWR_41J10QC4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white text-xl font-bold">Dra. Emily Chen</h4>
                  <p className="text-primary text-sm font-medium mb-2">Odontopediatra</p>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm">Haciendo que las visitas al dentista sean divertidas y sin miedo para nuestros pacientes más jóvenes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;