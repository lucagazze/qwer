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
    botcheck: false
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("Por favor acepta la política de privacidad para continuar.");
      return;
    }

    setStatus(AppointmentStatus.SUBMITTING);
    const formPayload = new FormData(e.currentTarget);
    
    formPayload.append("Nombre del Paciente", formPayload.get("name") as string);
    formPayload.delete("name");
    formPayload.append("Correo Electrónico", formPayload.get("email") as string);
    formPayload.delete("email");
    formPayload.append("Teléfono de Contacto", formPayload.get("phone") as string);
    formPayload.delete("phone");
    formPayload.append("Servicio Solicitado", formPayload.get("service") as string);
    formPayload.delete("service");
    formPayload.append("Mensaje del Paciente", formPayload.get("message") as string);
    formPayload.delete("message");
    
    formPayload.append("access_key", "392a0797-bcaa-4eb1-8b30-1b03db06d3ec");
    formPayload.append("subject", `📅 Nueva Cita: ${formData.name} - ${formData.service}`);
    formPayload.append("from_name", "Clínica Javier Web");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });
      const data = await response.json();

      if (data.success) {
        setStatus(AppointmentStatus.SUCCESS);
        setTimeout(() => {
          setStatus(AppointmentStatus.IDLE);
          setFormData({ name: '', email: '', phone: '', service: 'Odontología General', message: '', privacy: false, botcheck: false });
        }, 8000);
      } else {
        setStatus(AppointmentStatus.IDLE);
        alert(data.message || "Error al enviar.");
      }
    } catch (error) {
      setStatus(AppointmentStatus.IDLE);
      alert("Error de conexión.");
    }
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container" style={{maxWidth: '900px'}}>
        <div className="booking-card">
          <h2 style={{fontSize:'2.5rem', fontWeight:'bold', marginBottom:'1rem'}}>¿Listo para transformar tu sonrisa?</h2>
          <p style={{color:'#d1d5db', fontSize:'1.1rem', marginBottom:'2.5rem'}}>
            Agenda tu cita hoy. Respondemos a todas las solicitudes en menos de 24 horas.
          </p>

          {status === AppointmentStatus.SUCCESS ? (
             <div className="animate-fade-in" style={{background:'rgba(255,255,255,0.1)', padding:'2rem', borderRadius:'1rem', border:'1px solid rgba(255,255,255,0.1)'}}>
                <span className="material-symbols-outlined" style={{fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem'}}>check_circle</span>
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>¡Solicitud Recibida!</h3>
                <p style={{color: '#e5e7eb'}}>Gracias por contactarnos. Hemos recibido tus datos correctamente.</p>
                <button 
                  onClick={() => setStatus(AppointmentStatus.IDLE)}
                  style={{marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem'}}
                >
                  Agendar otra cita
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} style={{textAlign:'left'}}>
              <input type="checkbox" name="botcheck" checked={formData.botcheck} onChange={handleChange} className="hidden" />

              <div className="form-grid">
                <div>
                  <label htmlFor="name" className="sr-only">Nombre Completo</label>
                  <input id="name" type="text" name="name" required placeholder="Nombre Completo" value={formData.name} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                  <input id="email" type="email" name="email" required placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} className="form-input" />
                </div>
              </div>
              <div className="form-grid">
                 <div>
                   <label htmlFor="phone" className="sr-only">Teléfono</label>
                   <input id="phone" type="tel" name="phone" required placeholder="Número de Teléfono" value={formData.phone} onChange={handleChange} className="form-input" />
                 </div>
                <div>
                  <label htmlFor="service" className="sr-only">Seleccionar Servicio</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-select">
                    <option style={{color:'#333'}} value="Odontología General">Odontología General</option>
                    <option style={{color:'#333'}} value="Ortodoncia">Ortodoncia</option>
                    <option style={{color:'#333'}} value="Cosmética Dental">Cosmética Dental</option>
                    <option style={{color:'#333'}} value="Odontopediatría">Odontopediatría</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom:'1rem'}}>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea id="message" name="message" placeholder="¿Alguna nota adicional?" value={formData.message} onChange={handleChange} rows={3} className="form-input" style={{resize:'none'}} />
              </div>

              <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem'}}>
                  <input id="privacy" name="privacy" type="checkbox" checked={formData.privacy} onChange={handleChange} style={{width:'1.2rem', height:'1.2rem', cursor:'pointer', accentColor: '#14b8a6'}} />
                <label htmlFor="privacy" style={{fontSize: '0.9rem', color: '#9ca3af', cursor:'pointer'}}>
                  Acepto el procesamiento de mis datos personales.
                </label>
              </div>
              
              <button type="submit" disabled={status === AppointmentStatus.SUBMITTING} className="form-btn">
                {status === AppointmentStatus.SUBMITTING ? 'Enviando...' : 'Agendar Cita'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;