import { Router, Shield, Cloud, Headset } from "lucide-react";
import { Card, CardChip } from "../shared/ui/card";

export const ServiceCatalog = () => {
  const services = [
    {
      id: "networks",
      title: "Redes y Conectividad",
      description: "Diseñamos, implementamos y gestionamos infraestructura tecnológica de clase mundial para empresas que buscan crecer sin límites.",
      icon: <Router className="text-cyan-400" />,
      tags: ["Cisco", "Aruba"],
    },
    {
      id: "security",
      title: "Ciberseguridad Avanzada",
      description: "Ciberseguridad e infraestructura tecnológica de compensación de un tecnológica.",
      icon: <Shield className="text-cyan-400" />,
      tags: ["Aruba", "Fortinet", "Palo Alto"],
    },
    {
      id: "cloud",
      title: "Cloud & Data Centers",
      description: "Diseñamos, implementamos y gestionamos infraestructura tecnológica de clase empresarial para crecer sin límites.",
      icon: <Cloud className="text-cyan-400" />,
      tags: ["AWS", "Azure", "Data..."],
    },
    {
      id: "support",
      title: "Soporte Técnico Especializado",
      description: "Soporte técnico especializado infraestructura tecnológica de crecimiento en soporte técnico especializado.",
      icon: <Headset className="text-cyan-400" />,
      tags: ["Cisco", "AWS", "ESR"],
    },
  ];

  return (
    // Sección con fondo blanco y texto oscuro
    <section className="py-20 bg-white text-gray-900 relative z-10" id="soluciones">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            // Usamos la nueva variante "light"
            <Card key={service.id} variant="light">
              
              {/* Contenedor del icono con el fondo oscuro específico del HTML */}
              <div className="w-14 h-14 bg-[#0a192f] rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">
                {service.title}
              </h3>
              
              <p className="font-body text-base text-gray-600 mb-8 grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
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