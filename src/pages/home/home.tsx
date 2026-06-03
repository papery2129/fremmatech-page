import { Navbar } from "../../widgets/navbar";
import { Hero } from "../../widgets/hero";
import { AboutPurpose } from "../../widgets/about-purpose"; // <-- Nuevo
import { ServiceCatalog } from "../../widgets/service-catalog";
import { GalaxyEcosystem } from "../../widgets/galaxy-ecosystem";
import { Partners } from "../../widgets/partners";
import { ContactSection } from "../../widgets/contact-section";
import { Footer } from "../../widgets/footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden font-body">
      <Navbar />
      <main>
        <Hero />
        <AboutPurpose /> {/* <-- Inyectado aquí */}
        <ServiceCatalog />
        <GalaxyEcosystem />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};