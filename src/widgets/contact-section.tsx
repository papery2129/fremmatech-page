import { Button } from "../shared/ui/button";
import { Input } from "../shared/ui/input";

export const ContactSection = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Datos seguros listos para enviar:", data);
  };

  return (
    <section className="py-24 bg-background border-t border-white/5" id="contacto">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="text-center mb-12">
          <h2 className="font-headline text-[40px] font-bold text-on-surface mb-4">
            Agenda una consulta con un experto
          </h2>
          <p className="font-body text-base text-on-surface-variant">
            Déjanos tus datos y nos pondremos en contacto contigo para evaluar las necesidades tecnológicas de tu empresa.
          </p>
        </div>

        {/* Contenedor del efecto de elevación */}
        <div className="relative group">
          
          {/* 1. Ambient Glow: Capa difuminada que "empuja" el formulario hacia adelante */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-2rem blur-xl opacity-70 group-focus-within:opacity-100 transition-opacity duration-500"></div>
          
          {/* 2. El Formulario: Ahora con bg-surface-container-high para separarlo del fondo negro */}
          <form 
            onSubmit={handleSubmit}
            className="
              relative bg-[#1c1c1e]/90 backdrop-blur-2xl p-8 md:p-10 rounded-2xl space-y-6 
              border border-white/10 border-t-white/20
              shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
              focus-within:border-cyan-400/50 
              transition-all duration-500
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                id="company" 
                name="company" 
                label="Nombre de la empresa" 
                placeholder="Tu Empresa S.A." 
                required 
              />
              <Input 
                id="fullname" 
                name="fullname" 
                label="Nombre completo" 
                placeholder="Ej. Juan Pérez" 
                required 
              />
            </div>

            <Input 
              id="email" 
              name="email" 
              type="email"
              label="Correo electrónico" 
              placeholder="juan@tuempresa.com" 
              required 
            />

            <div>
              <label 
                htmlFor="service" 
                className="block font-mono text-[12px] font-bold tracking-widest text-on-surface-variant mb-2 uppercase"
              >
                Servicio de interés
              </label>
              <select 
                id="service" 
                name="service"
                required
                defaultValue=""
                className="w-full bg-[#131315] border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none cursor-pointer shadow-inner"
              >
                <option value="" disabled>Selecciona un servicio</option>
                <option value="redes">Redes y Conectividad</option>
                <option value="ciberseguridad">Ciberseguridad Avanzada</option>
                <option value="cloud">Cloud & Data Centers</option>
                <option value="soporte">Soporte Técnico Especializado</option>
                <option value="consultoria">Consultoría IT Industrial</option>
              </select>
            </div>

            <div className="pt-4 text-center">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full md:w-auto px-10 py-4 text-[13px] shadow-[0_0_20px_rgba(0,227,253,0.3)]"
              >
                ENVIAR SOLICITUD
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};