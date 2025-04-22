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
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your Solana assets</p>
          </div>
        </div>

        <div className="mb-8">
          <WalletStats />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TransactionList />
          </div>
          <div>
            <Card className="solana-card h-full border-solana-primary/10 dark:border-solana-primary/20">
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
                  <div className="p-3 bg-white dark:bg-solana-dark rounded-lg mb-4 shadow-sm">
                    <QRCodeCanvas
                      value={value}
                      size={200}
                      className="h-32 w-32"
                      bgColor="white"
                    />
                  </div>
                  <div className="w-full max-w-xs">
                    <p className="text-xs font-mono bg-solana-primary/5 dark:bg-solana-primary/10 p-3 rounded-lg text-foreground/80 break-all text-center">
                      {value}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-xs text-solana-primary hover:text-solana-primary/80 hover:bg-solana-primary/5 dark:hover:bg-solana-primary/10 w-full"
                      onClick={handleCopyAddress}
                    >
                      Copy Address
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
