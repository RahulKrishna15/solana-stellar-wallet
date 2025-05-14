import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, ArrowDown, ArrowUp, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getBalance, getPrice, makeTransaction } from "@/scripts/balance";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { SendDialog } from "./send-dialog";
import { ReceiveDialog } from "./receive-dialog";
import { useNavigate } from "react-router-dom";

export function WalletStats() {
  const { publicKey, sendTransaction } = useWallet();
  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0);
  const [signature, setSignature] = useState(null);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [isReceiveDialogOpen, setIsReceiveDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getBalance(publicKey);
      setBalance(balance);
      const price = await getPrice();
      setPrice(price);
    };
    fetchBalance();
  }, [publicKey]);

  const handleSend = async (recipient: string, amount: number) => {
    const signature = await makeTransaction(
      new PublicKey(recipient),
      amount,
      publicKey,
      sendTransaction
    );
    setSignature(signature);
    window.location.reload();
    return signature;
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card className="solana-card overflow-hidden border-solana-primary/10 dark:border-solana-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-solana-accent"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground/90">
              {balance / LAMPORTS_PER_SOL}
            </div>
            <p className="text-xs text-muted-foreground">
              ≈ ${(price * balance) / LAMPORTS_PER_SOL} USD
            </p>
            <div className="mt-4 flex justify-between items-center">
              <Button
                className="solana-button-primary flex items-center gap-1 text-sm py-1 rounded-full"
                size="sm"
                onClick={() => setIsSendDialogOpen(true)}
              >
                Send <ArrowUp className="h-3 w-3" />
              </Button>
              <Button
                className="solana-button-secondary flex items-center gap-1 text-sm py-1 rounded-full"
                size="sm"
                onClick={() => setIsReceiveDialogOpen(true)}
              >
                Receive <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="solana-card overflow-hidden border-solana-primary/10 dark:border-solana-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Token Collection
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-solana-primary"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground/90">6 NFTs</div>
            <p className="text-xs text-muted-foreground">2 Collections</p>
            <div className="mt-4 flex justify-between items-center">
              <Button
                className="solana-button-primary flex items-center gap-1 text-sm py-1 rounded-full"
                size="sm"
                onClick={() => navigate("/create-token")}
              >
                Create Token <ArrowRight className="h-3 w-3" />
              </Button>
              <Button
                className="solana-button-secondary flex items-center gap-1 text-sm py-1 rounded-full"
                size="sm"
              >
                View Collection <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <SendDialog
        isOpen={isSendDialogOpen}
        onClose={() => setIsSendDialogOpen(false)}
        onSend={handleSend}
      />
      <ReceiveDialog
        isOpen={isReceiveDialogOpen}
        onClose={() => setIsReceiveDialogOpen(false)}
      />
    </>
  );
}
