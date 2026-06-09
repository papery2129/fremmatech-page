import { Button } from "../shared/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Resplandor superior cyan (corregido por linter) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,227,253,0.15)_0%,transparent_50%)]"></div>
        {/* Gradiente de fondo con transición suave a surface */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-surface to-secondary-container/10"></div>
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