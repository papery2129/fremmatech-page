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
    <header className="bg-[#102a43]/95 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,227,253,0.15)] transition-transform">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        
        <a
          href="#"
          onClick={(e) => handleScroll(e, "", "#")}
          aria-label="Ir al inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm"
        >
          {/* Resplandor Fantasma suavizado: Opacidad bajó a 40% y escala a 1.8 */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/40 blur-xl rounded-full scale-[1.8] group-hover:bg-cyan-400/60 transition-colors duration-500"></div>

            <img
              src={logoIcon}
              alt="Logo Fremmatech"
              className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110 object-contain z-10"
            />
          </div>

          <div className="font-headline text-2xl font-bold tracking-wide z-10">
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
            /* Agregamos className para oscurecer específicamente este botón en el Navbar */
            className="bg-cyan-800/80 hover:bg-cyan-700 text-white border border-cyan-500/30 shadow-[0_0_10px_rgba(0,227,253,0.1)]"
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