import { Navbar } from "../../widgets/navbar";
import { Hero } from "../../widgets/hero";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden font-body">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
};