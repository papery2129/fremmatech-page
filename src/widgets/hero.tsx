import { Button } from "../shared/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* En un entorno real, esta imagen debe venir de un CDN optimizado o la carpeta /public */}
        <img 
          alt="Abstract deep space technology background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen" 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h1 className="font-headline text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-tight tracking-tight text-on-surface mb-6">
          Impulsando tu Transformación Digital
        </h1>
        
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Lideramos el futuro tecnológico corporativo con soluciones robustas, seguras y escalables para empresas de clase mundial.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Reutilizamos nuestros componentes primitivos de forma segura */}
          <Button variant="primary">
            COMENZAR AHORA
          </Button>
          <Button variant="secondary">
            EXPLORAR SERVICIOS
          </Button>
        </div>
      </div>
    </section>
  );
};