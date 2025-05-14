import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NFTPage from "./pages/NFT";
import NotFound from "./pages/NotFound";
import { WalletProvider } from "./providers/WalletProvider";
import CreateToken from "./pages/create-token";
import { Header } from "./components/header";
import { useWallet } from "@solana/wallet-adapter-react";
import { Hero } from "./components/hero";

const queryClient = new QueryClient();

const App = () => {
  const wallet = useWallet();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Router>
            <Header />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/create-token"
                element={wallet.publicKey ? <CreateToken /> : <Hero />}
              />
            </Routes>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
