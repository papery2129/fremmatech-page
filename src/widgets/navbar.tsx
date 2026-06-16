import { useState } from "react";
import { Button } from "../shared/ui/button";
import logoIcon from "../assets/frematech-icon.png";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Ecosistema", href: "#galaxy-section" },
    { label: "Aliados", href: "#aliados" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveLink(label);
    
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
    <header className="bg-[#050f1f]/95 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,227,253,0.15)] transition-transform">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, "", "#")}
          aria-label="Ir al inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm"
        >
          {/* FILTROS DE CONTRASTE APLICADOS:
            - drop-shadow-[0_0_8px_...]: Crea un aura/resplandor cyan que delinea el logo y evita que se pierda en el fondo oscuro.
            - brightness-125: Eleva la iluminación nativa de los colores del logo un 25%.
          */}
          <img 
            src={logoIcon} 
            alt="Logo Fremmatech" 
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110 object-contain drop-shadow-[0_0_8px_rgba(0,227,253,0.6)] brightness-125"
          />
          <div className="font-headline text-2xl font-bold tracking-wide">
            <span className="text-white">Fremma</span>
            <span className="text-cyan-400">tech</span>
          </div>
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.label, link.href)}
              className={`pb-1 transition-all duration-300 border-b-2 font-body text-base font-medium select-none ${
                activeLink === link.label
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 border-transparent hover:text-cyan-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contacto");
              if (target) {
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                setActiveLink("");
              }
            }}
          >
            CONTÁCTANOS
          </Button>
        </div>
      </div>
    </header>
  );
};