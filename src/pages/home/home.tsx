import { Navbar } from "../../widgets/navbar";
import { Hero } from "../../widgets/hero";
import { ServiceCatalog } from "../../widgets/service-catalog";
import { GalaxyEcosystem } from "../../widgets/galaxy-ecosystem";
import { Partners } from "../../widgets/partners";
import { ContactSection } from "../../widgets/contact-section";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden font-body">
      <Navbar />

      <main>
        <Hero />
        <ServiceCatalog />
        <GalaxyEcosystem />
        <Partners />
        <ContactSection />
      </main>
    </div>
  );
};