export const Partners = () => {
  // Lista actualizada exactamente con los nombres de tu nuevo HTML
  const partnersList = [
    "Dell Technologies", 
    "Cisco", 
    "Aruba", 
    "AWS", 
    "VMware", 
    "Palo Alto Networks", 
    "HP Enterprise", 
    "Microsoft", 
    "Fortinet"
  ];

  const infinitePartners = [...partnersList, ...partnersList];

  return (
    <section className="py-20 border-y overflow-hidden bg-surface border-white/5">
      <div className="max-w-container-max mx-auto text-center">
        
        {/* Nuevo bloque de encabezado (Semánticamente corregido) */}
        <div className="flex flex-col gap-2 mb-12 px-margin-mobile md:px-margin-desktop">
          <span className="font-mono text-[12px] font-bold text-secondary-container tracking-widest uppercase">
            PARTNERS TECNOLÓGICOS
          </span>
          <h2 className="font-headline text-[40px] font-bold text-on-surface">
            Respaldados por los mejores
          </h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Contenedor del Marquee: Se aplicó el gap-32 de tu HTML y mantenemos la velocidad */}
          <div 
            className="animate-marquee flex items-center transition-all duration-500 gap-32 w-max"
            style={{ animationDuration: '60s' }}
          >
            {infinitePartners.map((partner, index) => (
              <span 
                key={index} 
                // Clases exactas de tu HTML: tipografía grande, en negritas, uppercase y color secundario
                className="font-headline text-2xl font-bold uppercase text-secondary shrink-0"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};