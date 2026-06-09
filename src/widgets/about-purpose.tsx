import { Brain } from "lucide-react";

export const AboutPurpose = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-container-low border-y border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna de Texto */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl"></div>
          <span className="font-mono text-[12px] font-bold text-secondary-container tracking-[0.2em] mb-4 block uppercase">
            MISIÓN Y VISIÓN
          </span>
          <h2 className="font-headline text-[40px] font-bold text-on-surface mb-8">
            Nuestro Propósito
          </h2>
          <div className="space-y-6">
            <p className="font-body text-[18px] text-on-surface leading-relaxed">
              En un mundo cada vez más digital, en <span className="text-secondary-container font-bold">Fremmatech</span> buscamos impulsar la transformación tecnológica de tu empresa mediante soluciones confiables y estratégicas.
            </p>
            <p className="font-body text-[16px] text-on-surface-variant border-l-2 border-secondary-container/50 pl-6 italic">
              Brindamos respaldo tecnológico que se convierte en un recurso clave para alcanzar los objetivos de cualquier organización.
            </p>
            <p className="font-body text-[16px] text-on-surface-variant mb-4">
              Somos una empresa joven con visión sólida y objetivos claros, enfocada en ayudarte a tomar decisiones tecnológicas que aumenten la productividad y competitividad de tu negocio.
            </p>

            {/* Sello de confianza ULTRA SUTIL */}
            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-widest text-white/40 uppercase">
              <span>Distribuidor Autorizado:</span>
              <div className="flex gap-2 text-white/60 font-semibold">
                <span>Fortinet</span>
                <span>•</span>
                <span>Sophos</span>
                <span>•</span>
                <span>Lenovo</span>
              </div>
            </div>

          </div>
        </div>

        {/* Columna Visual 3D */}
        <div className="relative hidden lg:block">
          <div className="glass-card p-2 rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0">
            <img 
              alt="Transformación Digital y Soporte Estratégico" 
              className="rounded-xl w-full h-100 object-cover opacity-80" 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary-container/40 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl border border-secondary-container/30 backdrop-blur-md">
            <Brain className="text-secondary-container w-10 h-10 mb-2" />
            <div className="font-headline text-2xl font-bold text-on-surface">Transformación</div>
            <div className="font-mono text-[12px] text-on-surface-variant tracking-widest uppercase mt-1">Evolución Digital</div>
          </div>
        </div>

      </div>
    </section>
  );
};