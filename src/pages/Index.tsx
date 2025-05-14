import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { useWallet } from "@solana/wallet-adapter-react";
import Dashboard from "./Dashboard";

const Index = () => {
  const { publicKey } = useWallet();
  console.log(publicKey);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {publicKey ? <Dashboard value={publicKey.toString()} /> : <Hero />}
      </main>
    </div>
  );
};

export default Index;
