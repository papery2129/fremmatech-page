export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest py-20 border-t border-white/5 opacity-90 hover:opacity-100 transition-opacity">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Branding */}
        <div>
          <div className="font-headline text-4xl font-bold mb-6">
            <span className="text-on-surface">Fremma</span>
            <span className="text-secondary-container">tech</span>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed">
            Aliado estratégico en tecnología. Diseñamos, implementamos y gestionamos soluciones IT que impulsan el crecimiento empresarial.
          </p>
        </div>

        {/* Columna 2: Navegación Interna */}
        <div>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-6">Servicios</h4>
          <nav aria-label="Navegación de servicios del pie de página">
            <ul className="space-y-4 font-body text-base text-on-surface-variant">
              <li><a href="#soluciones" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">Redes y Conectividad</a></li>
              <li><a href="#soluciones" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">Consultoría Estratégica</a></li>
              <li><a href="#soluciones" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">Equipamiento IT</a></li>
              <li><a href="#soluciones" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">Soporte Especializado</a></li>
            </ul>
          </nav>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-6">Contacto</h4>
          <address className="not-italic">
            <ul className="space-y-4 font-body text-base text-on-surface-variant">
              <li>
                <a href="mailto:info@fremmatech.com" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  info@fremmatech.com
                </a>
              </li>
              <li>
                <a href="tel:+528112345678" className="hover:text-secondary-container transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
                  +52 (81) 1234-5678
                </a>
              </li>
              {/* Cambio de ubicación aplicado aquí */}
              <li>Chihuahua, Chih., México</li>
            </ul>
          </address>
        </div>
      </div>
      
      {/* Elemento de Copyright Dinámico */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-white/5 text-center font-mono text-[12px] text-on-surface-variant tracking-widest">
        &copy; {currentYear} FREMMATECH. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
};