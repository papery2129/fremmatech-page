import { Navbar } from "../../widgets/navbar";
import { Hero } from "../../widgets/hero";
import { ServiceCatalog } from "../../widgets/service-catalog";
import { GalaxyEcosystem } from "../../widgets/galaxy-ecosystem";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden font-body">
      <Navbar />

      <main>
        <Hero />
        <ServiceCatalog />
        
        {/* Aquí entra nuestra nueva sección interactiva 3D */}
        <GalaxyEcosystem />
        
      </main>
    </div>
  );
};