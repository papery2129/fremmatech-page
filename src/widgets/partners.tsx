export const Partners = () => {
  // Duplicamos la lista para crear la ilusión óptica de un scroll infinito sin cortes
  const partnersList = [
    "CISCO", "ARUBA", "AWS", "MICROSOFT", "FORTINET",
    "CISCO", "ARUBA", "AWS", "MICROSOFT", "FORTINET"
  ];

  return (
    <section className="py-20 bg-surface border-y border-white/5 overflow-hidden">
      <div className="max-w-container-max mx-auto text-center">
        
        <h3 className="font-mono text-[12px] font-bold tracking-[0.1em] text-on-surface-variant mb-8 px-margin-mobile md:px-margin-desktop uppercase">
          Tecnología respaldada por los líderes
        </h3>
        
        <div className="relative w-full overflow-hidden">
          {/* El contenedor principal de la animación Marquee */}
          <div className="animate-marquee flex items-center gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-max">
            
            {partnersList.map((partner, index) => (
              <div 
                key={index} 
                className="h-8 shrink-0 text-on-surface flex items-center"
              >
                <svg className="h-8 w-auto fill-current" viewBox="0 0 160 30">
                  <text 
                    fontFamily="Arial" 
                    fontSize="24" 
                    fontWeight="bold" 
                    x="0" 
                    y="22"
                  >
                    {partner}
                  </text>
                </svg>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </section>
  );
};