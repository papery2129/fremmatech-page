export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reutilizamos la lógica de Smooth Scroll con compensación del Navbar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 80; 

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-surface-container-lowest py-20 border-t border-white/5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Branding y "Back to Top" */}
        <div>
          <div 
            className="font-headline text-4xl font-bold mb-6 cursor-pointer inline-block transition-transform hover:scale-105"
            onClick={(e) => handleScroll(e, "#")}
            role="button"
            aria-label="Volver arriba"
          >
            <span className="text-on-surface">Fremma</span>
            <span className="text-secondary-container">tech</span>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed">
            Aliado estratégico en tecnología. Diseñamos, implementamos y gestionamos soluciones IT que impulsan el crecimiento empresarial.
          </p>
        </div>

        {/* Columna 2: Navegación de Servicios con Animación */}
        <div>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-6">Servicios</h4>
          <nav aria-label="Navegación de servicios del pie de página">
            <ul className="space-y-4 font-body text-base text-on-surface-variant">
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, "#soluciones")} className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, "#soluciones")} className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  Venta de Equipos
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, "#soluciones")} className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  Redes y Seguridad
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, "#soluciones")} className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Columna 3: Información de Contacto (El correo y teléfono conservan su acción nativa) */}
        <div>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-6">Contacto</h4>
          <address className="not-italic">
            <ul className="space-y-4 font-body text-base text-on-surface-variant">
              <li><a href="mailto:info@fremmatech.com" className="hover:text-secondary-container transition-colors">contacto@fremmatech.com</a></li>
              <li>Chihuahua, Chih., México</li>
            </ul>
          </address>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-white/5 text-center font-mono text-[12px] text-on-surface-variant tracking-widest">
        &copy; {currentYear} FREMMATECH. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
};