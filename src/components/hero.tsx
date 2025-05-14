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
    <section className="relative min-h-screen w-xl sm:w-full">
      {/* Animated background elements */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Single gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-solana-primary/10 dark:bg-solana-primary/20 blur-[120px] animate-pulse-solana"></div>

        {/* Simplified grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

        {/* Single animated circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-solana-primary/50 dark:bg-solana-primary animate-ping opacity-75"></div>
      </div>

      {/* Main content container with enhanced layout */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8 sm:px-6 sm:py-16 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content section */}
          <div className="space-y-10">
            {/* Headline with enhanced gradient text */}
            <div
              className={`transition-all duration-700 delay-100 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-solana-accent/30 bg-solana-accent/5 dark:bg-solana-accent/10 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-solana-accent mr-2" />
                <span className="text-base font-medium text-solana-accent">
                  The Future is Here
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl text-center sm:text-left font-bold mb-8 leading-tight tracking-tight">
                <span
                  className="bg-clip-text text-transparent relative z-10 
                  bg-gradient-to-br from-solana-primary via-solana-primary/90 to-solana-accent
                  dark:from-solana-primary dark:via-white dark:to-solana-accent
                  animate-text-gradient-slide"
                >
                  Experience Solana's
                  <br />
                  Next-Gen Wallet
                </span>
              </h1>
            </div>

            {/* Description with enhanced styling */}
            <p
              className={`text-xl md:text-2xl text-foreground/70 dark:text-foreground/80 transition-all duration-700 delay-300 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Secure, lightning-fast, and beautifully designed. Manage your
              Solana assets and NFTs with our revolutionary wallet experience
              powered by cutting-edge blockchain technology.
            </p>

            {/* CTA section with enhanced positioning */}
            <div
              className={`transition-all duration-700 delay-500 transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <p className="text-xl text-foreground/70 dark:text-foreground/80 mb-8 animate-pulse-slow">
                  Click the{" "}
                  <b>
                    <u>Select Wallet</u>
                  </b>{" "}
                  button at the top to get started
                </p>
              </div>
            </div>
          </div>

          {/* Right content section with floating elements */}
          <div className="relative hidden lg:block">
            {/* Orbital animation element with enhanced positioning */}
            <div className="relative w-full h-[600px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-solana-primary/10 dark:bg-solana-primary/20 backdrop-blur-md flex items-center justify-center border border-solana-primary/30 shadow-lg shadow-solana-primary/20 animate-pulse">
                      <Zap className="w-8 h-8 text-solana-primary" />
                    </div>
                  </div>
                  <div className="orbit-circle absolute inset-0 border-2 border-dashed border-solana-primary/20 rounded-full transition-all duration-1000"></div>
                  <div className="absolute inset-0 border-2 border-solana-primary/10 rounded-full animate-[spin_20s_linear_infinite]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-solana-accent/80 dark:bg-solana-accent shadow-lg shadow-solana-accent/30"></div>
                  </div>
                  <div className="absolute inset-0 border-2 border-solana-accent/10 rounded-full animate-[spin_25s_linear_infinite_reverse]">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-solana-primary/80 dark:bg-solana-primary shadow-lg shadow-solana-primary/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards with enhanced positioning */}
            <div
              className={`absolute top-1/4 left-0 p-5 rounded-xl neo-blur backdrop-blur-xl border border-solana-primary/10 dark:border-white/10 shadow-lg transform transition-all duration-700 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } max-w-xs`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-solana-primary to-solana-primary/50 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground/90 text-base">
                    Secure Transactions
                  </p>
                  <p className="text-foreground/60 text-sm">
                    Enterprise-grade protection
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`absolute bottom-1/4 right-0 p-5 rounded-xl neo-blur backdrop-blur-xl border border-solana-accent/10 dark:border-white/10 shadow-lg transform transition-all duration-700 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } max-w-xs`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-solana-accent to-solana-accent/50 flex items-center justify-center">
                  <span className="font-bold text-background dark:text-background text-lg">
                    NFT
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground/90 text-base">
                    Create & Manage NFTs
                  </p>
                  <p className="text-foreground/60 text-sm">
                    Mint in seconds, trade instantly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
