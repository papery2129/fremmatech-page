import { Router, Shield, Cloud, Headset } from "lucide-react";
import { Card, CardChip } from "../shared/ui/card";

export const ServiceCatalog = () => {
  const services = [
    {
      id: "networks",
      title: "Redes y Conectividad",
      description: "Diseñamos, implementamos y gestionamos infraestructura tecnológica de clase mundial para empresas que buscan crecer sin límites.",
      icon: <Router className="w-6 h-6 text-cyan-400" />,
      tags: ["Cisco", "Aruba"],
      color: "cyan",
    },
    {
      id: "security",
      title: "Ciberseguridad Avanzada",
      description: "Protección perimetral e interna de grado militar. Monitoreo 24/7 y respuesta a incidentes para salvaguardar sus activos más críticos.",
      icon: <Shield className="w-6 h-6 text-red-400" />,
      tags: ["Aruba", "Fortinet", "Palo Alto"],
      color: "red",
    },
    {
      id: "cloud",
      title: "Cloud & Data Centers",
      description: "Arquitecturas híbridas y multi-cloud escalables. Gestión integral de centros de datos con alta disponibilidad y redundancia.",
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      tags: ["AWS", "Azure", "Data..."],
      color: "green",
    },
    {
      id: "support",
      title: "Soporte Técnico Especializado",
      description: "Soporte técnico especializado para infraestructura tecnológica en crecimiento. Atención dedicada y resolución proactiva.",
      icon: <Headset className="w-6 h-6 text-yellow-400" />,
      tags: ["Cisco", "AWS", "ESR"],
      color: "yellow",
    },
  ];

return (
    <section className="py-20 relative z-10" id="soluciones">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              {/* Icon Container limpio */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-container border border-${service.color}-400/20 shadow-[0_0_15px_rgba(var(--color-${service.color}-400-rgb),0.2)]`}>
                {service.icon}
              </div>
              
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">
                {service.title}
              </h3>
              
              {/* Reemplazamos flex-grow por grow */}
              <p className="font-body text-base text-on-surface-variant mb-8 grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <CardChip key={tag}>{tag}</CardChip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};