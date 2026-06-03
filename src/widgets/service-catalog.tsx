import { Brain, MonitorSmartphone, Router, Headset } from "lucide-react";
import { Card, CardChip } from "../shared/ui/card";

export const ServiceCatalog = () => {
  const services = [
    {
      id: "consulting",
      title: "Consultoría",
      description: "Análisis de procesos internos para identificar oportunidades, puntos de dolor y mejoras estratégicas que impulsen el crecimiento.",
      icon: <Brain className="text-cyan-400" />,
      tags: ["Estrategia", "Procesos"],
    },
    {
      id: "hardware",
      title: "Venta de Equipos",
      description: "Opciones reales de equipamiento corporativo con entregas oportunas y soporte técnico post-venta garantizado.",
      icon: <MonitorSmartphone className="text-cyan-400" />,
      tags: ["Hardware", "Garantía"],
    },
    {
      id: "networks",
      title: "Redes",
      description: "Construcción de infraestructuras de red confiables y seguras para mantener la continuidad operativa.",
      icon: <Router className="text-cyan-400" />,
      tags: ["Networking", "Seguridad"],
    },
    {
      id: "support",
      title: "Soporte Técnico",
      description: "Soporte Nivel 1, 2 y 3 en modalidad remota y en sitio con esquemas flexibles por bolsa de horas o evento.",
      icon: <Headset className="text-cyan-400" />,
      tags: ["24/7", "ITIL"],
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative z-10" id="soluciones">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} variant="light">
              <div className="w-14 h-14 bg-[#0a192f] rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">
                {service.title}
              </h3>
              <p className="font-body text-base text-gray-600 mb-8 grow leading-relaxed">
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