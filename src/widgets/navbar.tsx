import { Globe } from "lucide-react";
import { Button } from "../shared/ui/button";

export const Navbar = () => {
  const navLinks = [
    { label: "Soluciones", href: "#soluciones", active: true },
    { label: "Industrias", href: "#industrias" },
    { label: "Aliados", href: "#aliados" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="bg-[var(--color-surface)]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(0,227,253,0.1)] transition-transform">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex justify-between items-center h-20">
        
        <div className="font-headline text-2xl font-bold text-[var(--color-on-surface)]">
          Fremmatech
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`pb-1 transition-all duration-300 hover:bg-white/5 ${
                link.active
                  ? "text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]"
                  : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            aria-label="Cambiar idioma"
            className="text-[var(--color-secondary)] cursor-pointer hover:bg-white/5 transition-all duration-300 p-2 rounded-full flex items-center justify-center"
          >
            <Globe className="w-5 h-5" />
          </button>
          
          <Button variant="primary">
            SOPORTE
          </Button>
        </div>
      </div>
    </header>
  );
};