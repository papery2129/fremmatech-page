import { Brain, MonitorSmartphone, Router, Headset } from "lucide-react";
import { Card, CardChip } from "../shared/ui/card";

// EFICIENCIA: Mover los datos estáticos fuera de la función del componente 
// previene la reasignación en memoria y la re-creación del array en cada ciclo de renderizado de React.
const SERVICES_DATA = [
  {
    id: "consulting",
    title: "Consultoría",
    description: "Análisis de procesos internos para identificar oportunidades, puntos de dolor y mejoras estratégicas que impulsen el crecimiento continuo de tu empresa.",
    icon: <Brain className="text-cyan-400" aria-hidden="true" />,
    tags: ["Estrategia", "Procesos"],
  },
  {
    id: "hardware",
    title: "Venta de Equipos",
    description: "Opciones reales de equipamiento corporativo de última generación, con entregas oportunas y un soporte técnico post-venta completamente garantizado.",
    icon: <MonitorSmartphone className="text-cyan-400" aria-hidden="true" />,
    tags: ["Lenovo", "Garantía"], // Tags recuperados
  },
  {
    id: "networks",
    title: "Redes y Seguridad",
    description: "Construcción de infraestructuras de red seguras, respaldadas por un monitoreo continuo de SOC y NOC para garantizar la continuidad operativa empresarial.",
    icon: <Router className="text-cyan-400" aria-hidden="true" />,
    tags: ["Fortinet", "Sophos"], // Tags recuperados
  },
  {
    id: "support",
    title: "Soporte Técnico",
    description: "Soporte técnico Nivel 1, 2 y 3 en modalidad remota y en sitio, con esquemas flexibles por bolsa de horas o evento.",
    icon: <Headset className="text-cyan-400" aria-hidden="true" />,
    tags: ["24/7", "ITIL"],
  },
];

export const ServiceCatalog = () => {
  return (
    <section className="py-20 bg-white text-gray-900 relative z-10" id="soluciones">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* ESCALABILIDAD UI: items-stretch obliga a las columnas a medir lo mismo. 
            El componente <Card> asume la responsabilidad del flex interior. */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {SERVICES_DATA.map((service) => (
            <Card key={service.id} variant="light">
              
              <div className="w-14 h-14 bg-[#0a192f] rounded-xl flex items-center justify-center mb-6 shrink-0">
                {service.icon}
              </div>
              
              <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">
                {service.title}
              </h3>
              
              <p className="font-body text-base text-gray-600 grow leading-relaxed pb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto border-t border-gray-100 pt-5">
                {service.tags.map((tag) => (
                  <CardChip key={tag} isLight>{tag}</CardChip>
                ))}
              </div>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};