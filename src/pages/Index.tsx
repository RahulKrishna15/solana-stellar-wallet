
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
