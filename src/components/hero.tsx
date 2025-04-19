
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-solana-primary/10 blur-3xl animate-pulse-solana"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-solana-accent/10 blur-3xl animate-pulse-solana animation-delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-primary to-solana-accent">
            The Future of Solana Wallets
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Secure, fast, and beautifully designed. Manage your Solana assets and NFTs with our 
          next-generation wallet experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button 
            className="solana-button-primary text-lg px-8 py-6 w-full sm:w-auto"
          >
            Connect Wallet
          </Button>
          
          <Button 
            variant="outline"
            className="border-solana-primary/20 hover:bg-solana-primary/10 transition-all duration-300 text-lg px-8 py-6 w-full sm:w-auto"
            asChild
          >
            <Link to="/dashboard">
              Explore Features
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/4 solana-card p-4 animate-float max-w-xs hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-solana-accent flex items-center justify-center">
            <Wallet className="w-5 h-5 text-solana-dark" />
          </div>
          <div className="text-sm">
            <p className="font-medium">Secure Transactions</p>
            <p className="text-foreground/60 text-xs">Your assets, always protected</p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 right-1/4 solana-card p-4 animate-float animation-delay-1000 max-w-xs hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-solana-primary flex items-center justify-center">
            <span className="font-bold text-white">NFT</span>
          </div>
          <div className="text-sm">
            <p className="font-medium">Create & Manage NFTs</p>
            <p className="text-foreground/60 text-xs">Mint your digital collectibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
