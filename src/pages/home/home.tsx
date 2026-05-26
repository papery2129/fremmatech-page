import { Navbar } from "../../widgets/navbar";
import { Hero } from "../../widgets/hero";
import { ServiceCatalog } from "../../widgets/service-catalog";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden font-body">
      <Navbar />

      <main>
        <Hero />
        <ServiceCatalog />
      </main>
    </div>
  );
};