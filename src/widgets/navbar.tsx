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
    <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(0,227,253,0.1)] transition-transform">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, "", "#")}
          aria-label="Ir al inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm"
        >
          <img 
            src={logoIcon} 
            alt="Logo Fremmatech" 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="font-headline text-2xl font-bold text-on-surface">
            <span className="text-on-surface">Fremma</span>
            <span className="text-secondary-container">tech</span>
          </div>
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.label, link.href)}
              className={`pb-1 transition-all duration-300 border-b-2 font-body text-base select-none ${
                activeLink === link.label
                  ? "text-secondary border-secondary"
                  : "text-on-surface-variant border-transparent hover:text-secondary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            aria-label="Cambiar idioma"
            className="text-secondary cursor-pointer hover:bg-white/5 transition-all duration-300 p-2 rounded-full flex items-center justify-center"
          >
            
          </button>
          
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