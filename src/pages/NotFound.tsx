
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-solana-primary/10 blur-3xl animate-pulse-solana"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-solana-accent/10 blur-3xl animate-pulse-solana animation-delay-1000"></div>
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-solana-primary to-solana-accent">404</h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">Oops! Page not found</p>
        <Button className="solana-button-primary" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
