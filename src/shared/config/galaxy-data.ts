import { 
  Router, Headset, MonitorSmartphone, Brain 
} from "lucide-react";

export const planetarySystem = [
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