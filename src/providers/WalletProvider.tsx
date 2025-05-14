import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

interface Props {
  children: React.ReactNode;
}

export const WalletProvider: FC<Props> = ({ children }) => {
  // Get network from environment variable, default to devnet if not set
  const network =
    (import.meta.env.VITE_NETWORK as WalletAdapterNetwork) ||
    WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(
    () => import.meta.env.VITE_SOLANA_RPC_URL || clusterApiUrl(network),
    [network]
  );

  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
};
