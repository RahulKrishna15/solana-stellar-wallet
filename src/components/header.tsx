import { ThemeToggle } from "./theme-toggle";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@/styles/wallet-buttons.css";
interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full py-4 px-6 flex items-center justify-between z-10",
        className
      )}
    >
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-solana-primary to-solana-accent p-0.5 group-hover:scale-110 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <Wallet className="w-4 h-4 text-solana-accent" />
          </div>
        </div>
        <span className="font-bold text-lg">SolanaWallet</span>
      </Link>

      <div className="flex items-center space-x-6">
        <WalletMultiButton className="wallet-adapter-button px-8 py-3" />
        <WalletDisconnectButton className="wallet-adapter-button-disconnect px-8 py-3" />
        <ThemeToggle />
      </div>
    </header>
  );
}
