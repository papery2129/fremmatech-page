import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import { cn } from "../shared/lib/utils";
import { planetarySystem } from "../shared/config/galaxy-data";
import { useParallaxStars } from "../shared/hooks/use-parallax";
import logoIcon from "../assets/frematech-icon.png";

export const GalaxyEcosystem = () => {
  // Estado de la UI
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Referencias y Hooks Personalizados
  const wrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { stars, starsRef } = useParallaxStars(300);

  // Computados
  const displayedNodeId = activeNode || hoveredNode;
  const activeService = planetarySystem.find(n => n.id === displayedNodeId);

  // Manejador de clics externos
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setActiveNode(null);
        setIsExpanded(false);
        if (wrapRef.current) wrapRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Manejadores de Interacción de Planetas
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
    <section ref={sectionRef} className="py-32 relative bg-primary-container overflow-hidden" id="galaxy-section">
      
      {/* Background & Parallax Stars */}
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
          
          {/* VISUALIZADOR 3D */}
          <div className="relative w-full max-w-162.5 aspect-square shrink-0 mx-auto" style={{ perspective: '1200px' }}>
            <div ref={wrapRef} className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out preserve-3d">
              
              <div className="orbit-ring w-60 h-60"></div>
              <div className="orbit-ring w-90 h-90"></div>
              <div className="orbit-ring w-120 h-120"></div>
              <div className="orbit-ring w-150 h-150"></div>
              
              {/* NÚCLEO (SOL) - LOGO DESDE ASSETS */}
              <div className="relative z-30 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl core-pulse"></div>
                <div className="absolute inset-0 w-24 h-24 bg-cyan-400/40 rounded-full blur-xl animate-pulse"></div>
                <div className="w-20 h-20 bg-cyan-800/50 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(0,227,253,0.6)] z-40 relative overflow-hidden">
                  <img 
                    src={logoIcon} 
                    alt="Núcleo Fremmatech" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <div className="absolute inset-0 z-40">
                {planetarySystem.map((node) => {
                  const Icon = node.icon;
                  const isNodeActive = activeNode === node.id || hoveredNode === node.id;
                  
                  return (
                    <div
                      key={node.id}
                      className={cn("cursor-pointer service-node group/node", isNodeActive && "active-node z-60")}
                      onMouseEnter={(e) => handleNodeMouseEnter(node.id, e)}
                      onMouseLeave={handleNodeMouseLeave}
                      onClick={(e) => handleNodeClick(node.id, e)}
                      style={{ '--orbit-radius': node.orbitRadius, '--duration': node.duration, animationDelay: node.delay } as React.CSSProperties}
                    >
                      <div className={cn(
                        "w-14 h-14 bg-surface/90 rounded-full border flex items-center justify-center transition-all duration-300",
                        node.styles.border, isNodeActive ? "scale-125 shadow-2xl" : "shadow-md group-hover/node:scale-125"
                      )}
                      style={{ boxShadow: isNodeActive ? `0 0 25px ${node.styles.shadowHex}` : `0 0 15px ${node.styles.shadowHex}` }}
                      >
                        <Icon className={cn(node.styles.text, "w-6 h-6")} />
                      </div>
                      
                      <div className={cn(
                        "absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-mono font-bold tracking-widest transition-opacity uppercase",
                        node.styles.text, isNodeActive ? "opacity-100" : "opacity-0 group-hover/node:opacity-100"
                      )}>
                        {node.label}
                      </div>

                      {node.subNodes.map((sub, idx) => (
                        <div key={idx} className="sub-node pointer-events-none" style={{ '--sub-orbit-radius': sub.radius, '--sub-duration': sub.duration, '--start-angle': sub.angle } as React.CSSProperties}>
                          <div className={cn("bg-surface border-2 rounded-full flex items-center justify-center", sub.borderClass, idx % 2 === 0 ? "w-6 h-6" : "w-7 h-7")} style={{ boxShadow: `0 0 8px ${sub.hex}` }}>
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

          {/* PANEL DE INFORMACIÓN */}
          <div className="w-full lg:w-112.5 relative min-h-125 lg:self-center">
            
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
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> SISTEMA OPERATIVO
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
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center border shrink-0", activeService.styles.bg, activeService.styles.border50)}>
                      <activeService.icon className={cn(activeService.styles.text, "w-8 h-8")} />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface leading-tight">{activeService.title}</h3>
                  </div>
                  
                  <div className="overflow-y-auto max-h-85 pr-2 custom-scrollbar">
                    <p className="font-body text-[16px] text-on-surface-variant mb-4 leading-relaxed">{activeService.desc}</p>
                    
                    <div className="service-card-expandable">
                      <div className={cn("mb-6 pt-2 border-t", activeService.styles.border50)}>
                        <p className="font-mono text-[12px] font-bold tracking-widest uppercase mb-4 pt-2 text-cyan-400">Detalle de Soluciones:</p>
                        <ul className="font-body text-[16px] text-on-surface-variant space-y-2 list-disc pl-5">
                          {activeService.features.map((feat, i) => <li key={i}>{feat}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }} className={cn("self-start border px-8 py-3 rounded-md font-mono text-[12px] font-bold tracking-widest transition-colors mt-4 flex items-center gap-2", activeService.styles.border, activeService.styles.text, activeService.styles.hoverBg)}>
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