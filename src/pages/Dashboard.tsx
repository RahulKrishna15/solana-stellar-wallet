import { Header } from "@/components/header";
import { TransactionList } from "@/components/transaction-list";
import { WalletStats } from "@/components/wallet-stats";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useWallet } from "@solana/wallet-adapter-react";
import { Background } from "@/components/background";
import { motion } from "framer-motion";

const Dashboard = ({ value }: { value: string }) => {
  const { publicKey } = useWallet();
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(publicKey.toString());
    toast({
      title: "Address Copied",
      description: "Your public key has been copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <main className="flex-1 container mx-auto py-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-primary to-solana-accent">
                Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage your Solana assets
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <WalletStats />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="md:col-span-2">
              <TransactionList />
            </div>
            <div>
              <Card className="solana-card h-full border-solana-primary/10 dark:border-solana-primary/20 backdrop-blur-sm bg-card/50">
                <CardHeader>
                  <CardTitle className="text-foreground/90">
                    Your Wallet
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Wallet address and details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center p-6 bg-solana-primary/5 dark:bg-solana-dark rounded-lg border border-solana-primary/10 dark:border-solana-primary/20 h-96">
                    <div className="p-3 bg-white/80 dark:bg-solana-dark/80 rounded-lg mb-4 shadow-sm backdrop-blur-sm">
                      <QRCodeCanvas
                        value={value}
                        size={200}
                        className="h-32 w-32"
                        bgColor="white"
                      />
                    </div>
                    <div className="w-full max-w-xs">
                      <p className="text-xs font-mono bg-solana-primary/5 dark:bg-solana-primary/10 p-3 rounded-lg text-foreground/80 break-all text-center backdrop-blur-sm">
                        {value}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3 text-xs text-solana-primary hover:text-solana-primary/80 hover:bg-solana-primary/5 dark:hover:bg-solana-primary/10 w-full backdrop-blur-sm"
                        onClick={handleCopyAddress}
                      >
                        Copy Address
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
