import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Network, Router, Shield, Cloud, Headset, 
  Factory, Store, Truck, MousePointerClick 
} from "lucide-react";
import { cn } from "../shared/lib/utils";

// 1. Clases explícitas para evitar que Tailwind las purgue
const orbitalNodes = [
  {
    id: "service-1", label: "REDES", title: "Redes y Conectividad",
    desc: "Infraestructura de red de alta velocidad y baja latencia, diseñada para entornos corporativos exigentes. Aseguramos la continuidad operativa con redundancia y gestión inteligente de tráfico.",
    icon: Router, radius: "260px", duration: "35s", delay: "0s", btnLabel: "VER SOLUCIONES",
    styles: {
      border: "border-cyan-400", text: "text-cyan-400", bg: "bg-cyan-900/40", 
      border50: "border-cyan-400/50", hoverBg: "hover:bg-cyan-400/10", shadowHex: "#22d3ee"
    }
  },
  {
    id: "service-2", label: "SEGURIDAD", title: "Ciberseguridad",
    desc: "Protección perimetral e interna de grado militar. Implementamos firewalls de nueva generación, EDR, y centros de operaciones de seguridad (SOC) para mitigar riesgos globales.",
    icon: Shield, radius: "260px", duration: "35s", delay: "-5s", btnLabel: "SEGURIDAD AVANZADA",
    styles: {
      border: "border-red-400", text: "text-red-400", bg: "bg-red-900/40", 
      border50: "border-red-400/50", hoverBg: "hover:bg-red-400/10", shadowHex: "#f87171"
    }
  },
  {
    id: "service-3", label: "CLOUD", title: "Cloud Solutions",
    desc: "Arquitecturas híbridas y multi-cloud escalables. Gestión integral de centros de datos con alta disponibilidad, optimización de costos y cumplimiento normativo.",
    icon: Cloud, radius: "190px", duration: "25s", delay: "-10s", btnLabel: "EXPLORAR NUBE",
    styles: {
      border: "border-green-400", text: "text-green-400", bg: "bg-green-900/40", 
      border50: "border-green-400/50", hoverBg: "hover:bg-green-400/10", shadowHex: "#4ade80"
    }
  },
  {
    id: "service-4", label: "SOPORTE", title: "Soporte Técnico",
    desc: "Asistencia técnica especializada disponible 24/7. Tiempos de respuesta garantizados y monitoreo proactivo para evitar interrupciones de servicio.",
    icon: Headset, radius: "190px", duration: "25s", delay: "-18s", btnLabel: "SOPORTE 24/7",
    styles: {
      border: "border-yellow-400", text: "text-yellow-400", bg: "bg-yellow-900/40", 
      border50: "border-yellow-400/50", hoverBg: "hover:bg-yellow-400/10", shadowHex: "#facc15"
    }
  },
  {
    id: "service-5", label: "INDUSTRIA", title: "Manufactura",
    desc: "Soluciones IT optimizadas para la cadena de producción, garantizando automatización y continuidad en la planta industrial.",
    icon: Factory, radius: "260px", duration: "35s", delay: "-12s", btnLabel: "IT INDUSTRIAL",
    styles: {
      border: "border-purple-400", text: "text-purple-400", bg: "bg-purple-900/40", 
      border50: "border-purple-400/50", hoverBg: "hover:bg-purple-400/10", shadowHex: "#c084fc"
    }
  },
  {
    id: "service-6", label: "RETAIL", title: "Retail Tech",
    desc: "Infraestructura robusta para puntos de venta, control de inventarios y experiencia del cliente sin interrupciones.",
    icon: Store, radius: "115px", duration: "20s", delay: "-4s", btnLabel: "VER RETAIL",
    styles: {
      border: "border-pink-400", text: "text-pink-400", bg: "bg-pink-900/40", 
      border50: "border-pink-400/50", hoverBg: "hover:bg-pink-400/10", shadowHex: "#f472b6"
    }
  },
  {
    id: "service-7", label: "LOGÍSTICA", title: "Logística",
    desc: "Sistemas de rastreo, conectividad en almacenes y gestión de flotas respaldados por tecnología de vanguardia.",
    icon: Truck, radius: "115px", duration: "20s", delay: "-14s", btnLabel: "VER LOGÍSTICA",
    styles: {
      border: "border-teal-400", text: "text-teal-400", bg: "bg-teal-900/40", 
      border50: "border-teal-400/50", hoverBg: "hover:bg-teal-400/10", shadowHex: "#2dd4bf"
    }
  }
];

export const GalaxyEcosystem = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stars = useMemo(() => {
    return Array.from({ length: 250 }).map(() => {
      const size = Math.random() < 0.1 ? (Math.random() * 2 + 2) : (Math.random() * 2 + 0.5);
      const colors = ['#ffffff', '#e0f2fe', '#fffbeb', '#f0f9ff'];
      const bgColor = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: Math.random().toString(36).substring(7),
        size, bgColor,
        left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.1,
        isPulsing: Math.random() > 0.8,
        depth: Math.random() * 0.1 + 0.02
      };
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        const moveX = e.clientX - window.innerWidth / 2;
        const moveY = e.clientY - window.innerHeight / 2;
        
        stars.forEach((star, index) => {
          const el = starsRef.current[index];
          if (el) {
            el.style.transform = `translate(${moveX * star.depth}px, ${moveY * star.depth}px)`;
          }
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [stars]);

  const handleNodeEnter = (nodeId: string, event: React.MouseEvent) => {
    setActiveNode(nodeId);
    if (wrapRef.current) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const containerRect = wrapRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      
      const rotateX = (rect.top + rect.height/2 - centerY) / 25;
      const rotateY = (rect.left + rect.width/2 - centerX) / -25;
      
      wrapRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }
  };

  const handleSectionLeave = () => {
    setActiveNode(null);
    if (wrapRef.current) {
      wrapRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  };

  const activeService = orbitalNodes.find(n => n.id === activeNode);

  return (
    <section className="py-32 relative bg-primary-container overflow-hidden" id="galaxy-section" onMouseLeave={handleSectionLeave}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#020b1a_0%,#000000_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-150 h-150 nebula-glow blur-[100px] opacity-40 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-900/10 blur-[150px] opacity-30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 bg-cyan-900/5 rotate-45 blur-[120px] rounded-full"></div>
        
        <div className="absolute inset-0" id="stars-field">
          {stars.map((star, i) => (
            <div
              key={star.id}
              ref={(el) => { starsRef.current[i] = el; }}
              className={cn("absolute rounded-full pointer-events-none", star.isPulsing && "animate-pulse")}
              style={{
                width: `${star.size}px`, height: `${star.size}px`,
                backgroundColor: star.bgColor,
                left: star.left, top: star.top,
                opacity: star.opacity,
                boxShadow: star.isPulsing ? `0 0 ${star.size * 2}px ${star.bgColor}` : "none",
                willChange: "transform"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline text-[40px] font-bold text-on-surface mb-4">Ecosistema Tecnológico</h2>
          <p className="font-body text-[18px] text-on-surface-variant max-w-xl mx-auto">Soluciones integradas orbitando alrededor del núcleo de tu negocio.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          <div className="relative w-full max-w-150 aspect-square shrink-0 mx-auto group" style={{ perspective: '1000px' }}>
            <div ref={wrapRef} className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out">
              
              <div className="orbit-ring w-[90%] h-[90%] opacity-10"></div>
              <div className="orbit-ring w-[65%] h-[65%] opacity-20 border-dashed"></div>
              <div className="orbit-ring w-[40%] h-[40%] opacity-30"></div>
              
              <div className="relative z-30 flex items-center justify-center">
                <div className="absolute inset-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl core-pulse"></div>
                <div className="absolute inset-0 w-24 h-24 bg-cyan-400/40 rounded-full blur-xl animate-pulse"></div>
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,227,253,0.4)] z-40 relative">
                  <Network className="text-cyan-400 w-10 h-10" />
                </div>
              </div>

              <div className="absolute inset-0 z-40">
                {orbitalNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      className="cursor-pointer service-node group/node"
                      onMouseEnter={(e) => handleNodeEnter(node.id, e)}
                      style={{ '--orbit-radius': node.radius, '--duration': node.duration, animationDelay: node.delay } as React.CSSProperties}
                    >
                      <div className={cn(
                        "w-14 h-14 bg-surface/90 rounded-full border flex items-center justify-center transition-all duration-300",
                        node.styles.border,
                        isActive || "shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.1)] group-hover/node:scale-125"
                      )}
                      style={{ boxShadow: `0 0 15px ${node.styles.shadowHex}` }}
                      >
                        <Icon className={cn(node.styles.text, "w-6 h-6")} />
                      </div>
                      
                      <div className={cn(
                        "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono font-bold tracking-widest transition-opacity duration-300",
                        node.styles.text,
                        isActive ? "opacity-100" : "opacity-0 group-hover/node:opacity-100"
                      )}>
                        {node.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-112.5 relative min-h-95 lg:self-center">
            <div className={cn(
              "glass-card p-10 rounded-2xl absolute inset-0 flex flex-col justify-center border-white/5 transition-all duration-500",
              activeService ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
            )}>
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <MousePointerClick className="w-8 h-8 text-on-surface-variant" />
              </div>
              <h3 className="font-headline text-2xl font-semibold text-on-surface mb-4">Explora el Universo Fremmatech</h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Pasa el cursor sobre los nodos orbitales para descubrir cómo nuestras soluciones especializadas convergen para potenciar su infraestructura digital.
              </p>
              <div className="mt-8 flex items-center gap-2 text-cyan-400 text-sm font-mono tracking-widest animate-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                INTERACCIÓN ACTIVA
              </div>
            </div>

            <div className={cn(
              "glass-card p-10 rounded-2xl absolute inset-0 flex flex-col justify-center transition-all duration-500",
              activeService ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
            style={{ 
              borderColor: activeService ? `${activeService.styles.shadowHex}40` : '' // Transparencia hex para el borde
            }}
            >
              {activeService && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center border",
                      activeService.styles.bg, activeService.styles.border50
                    )}>
                      <activeService.icon className={cn(activeService.styles.text, "w-8 h-8")} />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">{activeService.title}</h3>
                  </div>
                  
                  <p className="font-body text-base text-on-surface-variant mb-10 leading-relaxed">
                    {activeService.desc}
                  </p>
                  
                  <button className={cn(
                    "self-start border px-8 py-3 rounded-md font-mono text-[12px] font-bold tracking-widest transition-colors",
                    activeService.styles.border, activeService.styles.text, activeService.styles.hoverBg
                  )}>
                    {activeService.btnLabel}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};