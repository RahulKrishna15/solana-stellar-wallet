import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Wallet, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const intervalId = setInterval(() => {
      const orbit = document.querySelector(".orbit-circle");
      if (orbit) {
        orbit.classList.toggle("orbit-pulse");
      }
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-gradient-to-b from-background via-background/90 to-background">
      {/* Animated background elements */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-solana-primary/20 blur-[100px] animate-pulse-solana"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full bg-solana-accent/20 blur-[100px] animate-pulse-solana animation-delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-solana-primary animate-ping opacity-75"></div>
        <div className="absolute top-2/3 right-[15%] w-3 h-3 rounded-full bg-solana-accent animate-ping opacity-75 animation-delay-500"></div>
        <div className="absolute bottom-1/4 left-[30%] w-2 h-2 rounded-full bg-solana-primary animate-ping opacity-75 animation-delay-700"></div>
      </div>

      {/* Content container with fade-in animation */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Main content with staggered animation */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Headline with gradient text */}
          <div
            className={`transition-all duration-700 delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full border border-solana-accent/30 bg-solana-accent/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-solana-accent mr-2" />
              <span className="text-sm font-medium text-solana-accent">The Future is Here</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent relative z-10 
                bg-gradient-to-br from-solana-primary via-white to-solana-accent
                animate-text-gradient-slide">
                Experience Solana's
                <br />Next-Gen Wallet
              </span>
            </h1>
          </div>

          {/* Description with delayed animation */}
          <p 
            className={`text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Secure, lightning-fast, and beautifully designed. Manage your Solana assets and NFTs with our revolutionary wallet experience powered by cutting-edge blockchain technology.
          </p>

          {/* CTA section with delayed animation */}
          <div 
            className={`flex flex-col items-center justify-center transition-all duration-700 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Animated wallet button guidance */}
            <div className="relative">
              <p className="text-lg text-foreground/80 mb-8 animate-pulse-slow">
                Click the "Select Wallet" button at the top to get started
              </p>
              <div className="absolute -top-10 right-10 transform rotate-12 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="animate-bounce-slow">
                  <path d="M5 15C5 16.8565 5.73753 18.6371 7.05029 19.9498C8.36306 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.6372 21.2626 16.95 19.9498C18.2628 18.6371 19.0003 16.8565 19.0003 15L5 15Z" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3L12 15" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7L12 3L16 7" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Orbital animation element */}
        <div className="absolute bottom-20 right-20 md:bottom-32 md:right-32 w-64 h-64 hidden md:block">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-solana-primary/20 backdrop-blur-md flex items-center justify-center border border-solana-primary/30 shadow-lg shadow-solana-primary/20 animate-pulse">
                <Zap className="w-6 h-6 text-solana-primary" />
              </div>
            </div>
            <div className="orbit-circle absolute inset-0 border-2 border-dashed border-solana-primary/20 rounded-full transition-all duration-1000"></div>
            <div className="absolute inset-0 border-2 border-solana-primary/10 rounded-full animate-[spin_20s_linear_infinite]">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-solana-accent shadow-lg shadow-solana-accent/30"></div>
            </div>
            <div className="absolute inset-0 border-2 border-solana-accent/10 rounded-full animate-[spin_25s_linear_infinite_reverse]">
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-solana-primary shadow-lg shadow-solana-primary/30"></div>
            </div>
          </div>
        </div>
        
        {/* Floating cards */}
        <div 
          className={`absolute md:top-1/3 md:left-16 p-4 rounded-xl neo-blur backdrop-blur-xl border border-white/10 shadow-lg transform transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hidden md:block max-w-xs`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solana-primary to-solana-primary/50 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground/90">Secure Transactions</p>
              <p className="text-foreground/60 text-xs">Enterprise-grade protection</p>
            </div>
          </div>
        </div>

        <div 
          className={`absolute md:bottom-1/3 md:right-24 p-4 rounded-xl neo-blur backdrop-blur-xl border border-white/10 shadow-lg transform transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hidden md:block max-w-xs`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solana-accent to-solana-accent/50 flex items-center justify-center">
              <span className="font-bold text-background dark:text-background">NFT</span>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground/90">Create & Manage NFTs</p>
              <p className="text-foreground/60 text-xs">Mint in seconds, trade instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}