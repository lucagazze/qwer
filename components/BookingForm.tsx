import React, { useState } from 'react';
import { AppointmentStatus } from '../types';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<AppointmentStatus>(AppointmentStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Odontología General',
    message: '',
    privacy: false,
    botcheck: false // Honeypot: Campo trampa para bots
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si el campo botcheck (oculto) fue marcado, es un bot.
    // Simulamos éxito pero no enviamos nada.
    if (formData.botcheck) {
      console.log("Bot detectado");
      setStatus(AppointmentStatus.SUCCESS);
      return;
    }

    if (!formData.privacy) {
      alert("Por favor acepta la política de privacidad para continuar.");
      return;
    }

    setStatus(AppointmentStatus.SUBMITTING);
    
    const WEB3FORMS_ACCESS_KEY = '392a0797-bcaa-4eb1-8b30-1b03db06d3ec';

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      
      // Configuración del Correo
      subject: `📅 Nueva Cita: ${formData.name} - ${formData.service}`,
      from_name: "Clínica Javier Web",
      replyto: formData.email, 
      
      // Habilitar Honeypot en el backend (debe coincidir con el input name="botcheck" vacío)
      // Web3Forms revisará si enviamos algo en un campo llamado 'botcheck' si usamos formulario HTML,
      // pero en JSON debemos asegurarnos de no enviar basura.
      
      // Datos Visibles en el Correo
      "Nombre del Paciente": formData.name,
      "Correo Electrónico": formData.email,
      "Teléfono de Contacto": formData.phone,
      "Tipo de Servicio": formData.service,
      "Mensaje / Notas": formData.message || "Sin mensaje adicional",
      "Consentimiento": "Política de Privacidad Aceptada ✅"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        setStatus(AppointmentStatus.SUCCESS);
        setTimeout(() => {
          setStatus(AppointmentStatus.IDLE);
          setFormData({ 
            name: '', 
            email: '', 
            phone: '', 
            service: 'Odontología General', 
            message: '',
            privacy: false,
            botcheck: false
          });
        }, 8000);
      } else {
        console.error("Error al enviar formulario", data);
        // Mensaje específico si el usuario olvidó desactivar el Captcha
        if (data.message && data.message.includes("hCaptcha")) {
          alert("Error de Configuración: Por favor desactiva el 'Captcha' en el panel de configuración de tu Access Key en Web3Forms (revisa tu email).");
        } else {
          alert("Hubo un problema enviando el formulario: " + (data.message || "Error desconocido"));
        }
        setStatus(AppointmentStatus.IDLE);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión. Intenta nuevamente.");
      setStatus(AppointmentStatus.IDLE);
    }
  };

  return (
    <section id="booking" className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#101818] to-[#1b2525] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">¿Listo para transformar tu sonrisa?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Agenda tu cita hoy. Respondemos a todas las solicitudes en menos de 24 horas.
          </p>

          {status === AppointmentStatus.SUCCESS ? (
             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-white/10 relative z-20 animate-in fade-in zoom-in duration-300">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
                <h3 className="text-2xl font-bold mb-2">¡Solicitud Recibida!</h3>
                <p className="text-gray-300 mb-4">Gracias por contactarnos. Hemos recibido tus datos correctamente.</p>
                <div className="text-xs bg-white/5 p-3 rounded-lg text-gray-400 border border-white/5">
                  <p>ℹ️ Si no recibes confirmación pronto, por favor revisa tu carpeta de Spam o Promociones.</p>
                </div>
                <button 
                  onClick={() => setStatus(AppointmentStatus.IDLE)}
                  className="mt-6 text-primary hover:text-white font-medium transition-colors"
                >
                  Agendar otra cita
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 relative z-20">
              
              {/* Campo Honeypot (Oculto) - Protección Spam */}
              <input 
                type="checkbox" 
                name="botcheck" 
                checked={formData.botcheck}
                onChange={handleChange}
                className="hidden" 
                style={{ display: 'none' }}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                  <label htmlFor="name" className="sr-only">Nombre Completo</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre Completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="text-left">
                  <label htmlFor="phone" className="sr-only">Teléfono</label>
                   <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Número de Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                 </div>
                <div className="text-left">
                  <label htmlFor="service" className="sr-only">Servicio</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option className="bg-gray-800" value="Odontología General">Odontología General</option>
                    <option className="bg-gray-800" value="Ortodoncia">Ortodoncia</option>
                    <option className="bg-gray-800" value="Cosmética Dental">Cosmética Dental</option>
                    <option className="bg-gray-800" value="Odontopediatría">Odontopediatría</option>
                  </select>
                </div>
              </div>

              <div className="text-left">
                <label htmlFor="message" className="sr-only">Mensaje (Opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="¿Alguna nota adicional o preferencia de horario?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Checkbox de Privacidad */}
              <div className="flex items-start gap-3 text-left px-1">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-600 bg-white/10 text-primary focus:ring-offset-gray-900 focus:ring-primary"
                  />
                </div>
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  Acepto el procesamiento de mis datos personales para coordinar la cita. <span className="text-gray-500">(Tus datos están seguros con nosotros)</span>
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={status === AppointmentStatus.SUBMITTING}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-primary/30 text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === AppointmentStatus.SUBMITTING ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Enviando...
                  </>
                ) : (
                  'Agendar Cita'
                )}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                O llámanos directamente al <span className="text-white font-semibold">(555) 123-4567</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;