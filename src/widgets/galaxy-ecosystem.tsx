import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Router, Headset, MonitorSmartphone, Brain, Sparkles, ChevronDown 
} from "lucide-react";
import { cn } from "../shared/lib/utils";

// Base de datos del Sistema Planetario con clases de Tailwind EXPLÍCITAS
const planetarySystem = [
  {
    id: "service-1", 
    label: "REDES", 
    title: "Redes y Telecomunicaciones",
    desc: "Construimos infraestructuras de red robustas, escalables y seguras que garantizan la conectividad crítica de su negocio.",
    features: [
      "Instalación de Cableado estructurado y fibra óptica",
      "Cámaras de videovigilancia (CCTV)",
      "Configuración y administración de switchers, routers y conmutadores",
      "Sistemas de control de accesos"
    ],
    icon: Router, 
    orbitRadius: "120px", duration: "25s", delay: "-5s",
    styles: {
      border: "border-blue-500", text: "text-blue-500", bg: "bg-blue-900/40",
      border50: "border-blue-500/50", hoverBg: "hover:bg-blue-500/10", shadowHex: "rgba(59,130,246,0.5)"
    },
    subNodes: [
      { radius: "50px", duration: "10s", angle: "0deg", borderClass: "border-blue-400", bgClass: "bg-blue-400", hex: "rgba(96,165,250,0.4)" },
      { radius: "55px", duration: "14s", angle: "90deg", borderClass: "border-cyan-400", bgClass: "bg-cyan-400", hex: "rgba(34,211,238,0.4)" },
      { radius: "50px", duration: "12s", angle: "180deg", borderClass: "border-blue-400", bgClass: "bg-blue-400", hex: "rgba(96,165,250,0.4)" },
      { radius: "55px", duration: "16s", angle: "270deg", borderClass: "border-cyan-400", bgClass: "bg-cyan-400", hex: "rgba(34,211,238,0.4)" }
    ]
  },
  {
    id: "service-4", 
    label: "SOPORTE", 
    title: "Soporte Técnico",
    desc: "Asistencia experta Nivel 1, 2 y 3. Esquemas flexibles que se adaptan a la criticidad de su operación.",
    features: [
      "Soporte a cómputo y aplicaciones (Win, Android, iOS, Linux)",
      "Gestión de Infraestructura de servidores y virtualización",
      "Soporte especializado SAP (S4 HANA y Business One)",
      "Mantenimiento preventivo y correctivo integral"
    ],
    icon: Headset, 
    orbitRadius: "180px", duration: "35s", delay: "-15s",
    styles: {
      border: "border-yellow-400", text: "text-yellow-400", bg: "bg-yellow-900/40",
      border50: "border-yellow-400/50", hoverBg: "hover:bg-yellow-400/10", shadowHex: "rgba(250,204,21,0.5)"
    },
    subNodes: [
      { radius: "60px", duration: "12s", angle: "0deg", borderClass: "border-orange-300", bgClass: "bg-orange-300", hex: "rgba(253,186,116,0.4)" },
      { radius: "65px", duration: "15s", angle: "90deg", borderClass: "border-yellow-300", bgClass: "bg-yellow-300", hex: "rgba(253,224,71,0.4)" },
      { radius: "60px", duration: "18s", angle: "180deg", borderClass: "border-orange-300", bgClass: "bg-orange-300", hex: "rgba(253,186,116,0.4)" },
      { radius: "65px", duration: "11s", angle: "270deg", borderClass: "border-yellow-300", bgClass: "bg-yellow-300", hex: "rgba(253,224,71,0.4)" }
    ]
  },
  {
    id: "service-3", 
    label: "EQUIPAMIENTO", 
    title: "Venta de Equipo",
    desc: "Equipamiento tecnológico corporativo de última generación para potenciar la productividad operativa.",
    features: [
      "PCs, Laptops y dispositivos periféricos",
      "Servidores y Almacenamiento (Storage)",
      "Infraestructura de Networking activa",
      "Equipos de impresión profesional"
    ],
    icon: MonitorSmartphone, 
    orbitRadius: "240px", duration: "45s", delay: "-10s",
    styles: {
      border: "border-red-500", text: "text-red-500", bg: "bg-red-900/40",
      border50: "border-red-500/50", hoverBg: "hover:bg-red-500/10", shadowHex: "rgba(239,68,68,0.5)"
    },
    subNodes: [
      { radius: "65px", duration: "18s", angle: "0deg", borderClass: "border-red-400", bgClass: "bg-red-400", hex: "rgba(248,113,113,0.4)" },
      { radius: "70px", duration: "22s", angle: "90deg", borderClass: "border-orange-400", bgClass: "bg-orange-400", hex: "rgba(251,146,60,0.4)" },
      { radius: "65px", duration: "14s", angle: "180deg", borderClass: "border-red-400", bgClass: "bg-red-400", hex: "rgba(248,113,113,0.4)" },
      { radius: "70px", duration: "26s", angle: "270deg", borderClass: "border-orange-400", bgClass: "bg-orange-400", hex: "rgba(251,146,60,0.4)" }
    ]
  },
  {
    id: "service-2", 
    label: "CONSULTORÍA", 
    title: "Consultoría IT",
    desc: "Brindamos un análisis profundo de sus procesos internos para identificar oportunidades estratégicas de mejora y crecimiento tecnológico.",
    features: [
      "Implementación o actualización de ERP (SAP, etc.)",
      "Desarrollo de Software a la medida",
      "Implementación de DRP y Continuidad de Negocio",
      "Estrategia tecnológica de Ciberseguridad",
      "Soluciones de IA y Automatización (RPA)"
    ],
    icon: Brain, 
    orbitRadius: "300px", duration: "60s", delay: "-30s",
    styles: {
      border: "border-purple-500", text: "text-purple-500", bg: "bg-purple-900/40",
      border50: "border-purple-500/50", hoverBg: "hover:bg-purple-500/10", shadowHex: "rgba(168,85,247,0.5)"
    },
    subNodes: [
      { radius: "70px", duration: "20s", angle: "0deg", borderClass: "border-purple-300", bgClass: "bg-purple-300", hex: "rgba(216,180,254,0.4)" },
      { radius: "75px", duration: "25s", angle: "72deg", borderClass: "border-fuchsia-400", bgClass: "bg-fuchsia-400", hex: "rgba(232,121,249,0.4)" },
      { radius: "70px", duration: "18s", angle: "144deg", borderClass: "border-purple-400", bgClass: "bg-purple-400", hex: "rgba(192,132,252,0.4)" },
      { radius: "75px", duration: "22s", angle: "216deg", borderClass: "border-indigo-400", bgClass: "bg-indigo-400", hex: "rgba(129,140,248,0.4)" },
      { radius: "70px", duration: "15s", angle: "288deg", borderClass: "border-violet-400", bgClass: "bg-violet-400", hex: "rgba(167,139,250,0.4)" }
    ]
  }
];

export const GalaxyEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const wrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);

  const displayedNodeId = activeNode || hoveredNode;
  const activeService = planetarySystem.find(n => n.id === displayedNodeId);

  const stars = useMemo(() => {
    return Array.from({ length: 300 }).map(() => {
      const size = Math.random() < 0.1 ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.5);
      const colors = ['#ffffff', '#e0f2fe', '#fffbeb', '#f0f9ff', '#00e3fd'];
      const bgColor = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: Math.random().toString(36).substring(7),
        size, bgColor,
        left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.2,
        isPulsing: Math.random() > 0.85,
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
          if (el) el.style.transform = `translate(${moveX * star.depth}px, ${moveY * star.depth}px)`;
        });
      });
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setActiveNode(null);
        setIsExpanded(false);
        if (wrapRef.current) wrapRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutside);
      cancelAnimationFrame(rafId);
    };
  }, [stars]);

  const handleNodeMouseEnter = (nodeId: string, event: React.MouseEvent) => {
    if (activeNode) return;
    setHoveredNode(nodeId);
    
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

  const handleNodeMouseLeave = () => {
    if (activeNode) return;
    setHoveredNode(null);
    if (wrapRef.current) wrapRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const handleNodeClick = (nodeId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (activeNode === nodeId) {
      setActiveNode(null);
      setIsExpanded(false);
      handleNodeMouseLeave();
    } else {
      setActiveNode(nodeId);
      setHoveredNode(null);
      setIsExpanded(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative bg-[#020b1a] overflow-hidden" 
      id="galaxy-section"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#020b1a_0%,#000000_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-150 h-150 nebula-glow blur-[120px] opacity-40 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-900/10 blur-[150px] opacity-30 rounded-full"></div>
        
        <div className="absolute inset-0">
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
                boxShadow: star.isPulsing ? `0 0 ${star.size * 3}px ${star.bgColor}` : "none",
                willChange: "transform"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        <div className="text-center mb-20 pointer-events-none">
          <h2 className="font-headline text-[40px] font-bold text-on-surface mb-4">Ecosistema Tecnológico</h2>
          <p className="font-body text-[18px] text-on-surface-variant max-w-xl mx-auto">
            Soluciones integradas orbitando en armonía alrededor del núcleo de tu negocio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          <div className="relative w-full max-w-[650px] aspect-square shrink-0 mx-auto" style={{ perspective: '1200px' }}>
            <div 
              ref={wrapRef} 
              className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out preserve-3d"
            >
              <div className="orbit-ring w-[240px] h-[240px]"></div>
              <div className="orbit-ring w-[360px] h-[360px]"></div>
              <div className="orbit-ring w-[480px] h-[480px]"></div>
              <div className="orbit-ring w-[600px] h-[600px]"></div>
              
              <div className="relative z-30 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl core-pulse"></div>
                <div className="absolute inset-0 w-24 h-24 bg-cyan-400/40 rounded-full blur-xl animate-pulse"></div>
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,227,253,0.4)] z-40 relative">
                  <NetworkIcon />
                </div>
              </div>

              <div className="absolute inset-0 z-40">
                {planetarySystem.map((node) => {
                  const Icon = node.icon;
                  const isNodeActive = activeNode === node.id || hoveredNode === node.id;
                  
                  return (
                    <div
                      key={node.id}
                      className={cn(
                        "cursor-pointer service-node group/node",
                        isNodeActive && "active-node z-60"
                      )}
                      onMouseEnter={(e) => handleNodeMouseEnter(node.id, e)}
                      onMouseLeave={handleNodeMouseLeave}
                      onClick={(e) => handleNodeClick(node.id, e)}
                      style={{ 
                        '--orbit-radius': node.orbitRadius, 
                        '--duration': node.duration, 
                        animationDelay: node.delay 
                      } as React.CSSProperties}
                    >
                      <div className={cn(
                        "w-14 h-14 bg-surface/90 rounded-full border flex items-center justify-center transition-all duration-300",
                        node.styles.border,
                        isNodeActive ? "scale-125 shadow-2xl" : "shadow-md group-hover/node:scale-125"
                      )}
                      style={{ boxShadow: isNodeActive ? `0 0 25px ${node.styles.shadowHex}` : `0 0 15px ${node.styles.shadowHex}` }}
                      >
                        <Icon className={cn(node.styles.text, "w-6 h-6")} />
                      </div>
                      
                      <div className={cn(
                        "absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-mono font-bold tracking-widest transition-opacity uppercase",
                        node.styles.text,
                        isNodeActive ? "opacity-100" : "opacity-0 group-hover/node:opacity-100"
                      )}>
                        {node.label}
                      </div>

                      {/* CORRECCIÓN: Usamos sub.borderClass y sub.bgClass completos */}
                      {node.subNodes.map((sub, idx) => (
                        <div 
                          key={idx}
                          className="sub-node pointer-events-none"
                          style={{
                            '--sub-orbit-radius': sub.radius,
                            '--sub-duration': sub.duration,
                            '--start-angle': sub.angle
                          } as React.CSSProperties}
                        >
                          <div 
                            className={cn(
                              "bg-surface border-2 rounded-full flex items-center justify-center",
                              sub.borderClass,
                              idx % 2 === 0 ? "w-6 h-6" : "w-7 h-7"
                            )}
                            style={{ boxShadow: `0 0 8px ${sub.hex}` }}
                          >
                            <div className={cn("rounded-full", sub.bgClass, idx % 2 === 0 ? "w-2 h-2" : "w-2.5 h-2.5")}></div>
                          </div>
                        </div>
                      ))}

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[450px] relative min-h-[500px] lg:self-center">
            
            <div className={cn(
              "glass-card p-10 rounded-2xl absolute inset-0 flex flex-col justify-center border-white/5 transition-all duration-500",
              activeService ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
            )}>
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-on-surface-variant" />
              </div>
              <h3 className="font-headline text-2xl font-semibold text-on-surface mb-4">Universo Fremmatech</h3>
              <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                Nuestra arquitectura de soluciones orbita estratégicamente alrededor de tus necesidades. Selecciona un planeta para profundizar en nuestras capacidades.
              </p>
              <div className="mt-8 flex items-center gap-2 text-cyan-400 text-sm font-mono tracking-widest animate-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                SISTEMA OPERATIVO
              </div>
            </div>

            <div className={cn(
              "glass-card p-10 rounded-2xl absolute inset-0 flex flex-col justify-center transition-all duration-500",
              isExpanded && "service-card-expanded",
              activeService ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
            style={{ borderColor: activeService ? activeService.styles.shadowHex : '' }}
            >
              {activeService && (
                <>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center border shrink-0",
                      activeService.styles.bg, activeService.styles.border50
                    )}>
                      <activeService.icon className={cn(activeService.styles.text, "w-8 h-8")} />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface leading-tight">
                      {activeService.title}
                    </h3>
                  </div>
                  
                  <div className="overflow-y-auto max-h-[340px] pr-2 custom-scrollbar">
                    <p className="font-body text-[16px] text-on-surface-variant mb-4 leading-relaxed">
                      {activeService.desc}
                    </p>
                    
                    <div className="service-card-expandable">
                      <div className={cn("mb-6 pt-2 border-t", activeService.styles.border50)}>
                        <p className={cn("font-mono text-[12px] font-bold tracking-widest uppercase mb-4 pt-2", activeService.styles.text)}>
                          Detalle de Soluciones:
                        </p>
                        <ul className="font-body text-[16px] text-on-surface-variant space-y-2 list-disc pl-5">
                          {activeService.features.map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                    className={cn(
                      "self-start border px-8 py-3 rounded-md font-mono text-[12px] font-bold tracking-widest transition-colors mt-4 flex items-center gap-2",
                      activeService.styles.border, activeService.styles.text, activeService.styles.hoverBg
                    )}
                  >
                    <span>{isExpanded ? 'VER MENOS' : 'SABER MÁS'}</span>
                    <ChevronDown className="w-4 h-4 expand-icon transition-transform duration-300" />
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

const NetworkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="36" height="36" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
    className="text-cyan-400"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    <rect x="2" y="6" width="6" height="12" rx="1"/>
    <rect x="16" y="6" width="6" height="12" rx="1"/>
    <path d="M8 12h8"/>
  </svg>
);