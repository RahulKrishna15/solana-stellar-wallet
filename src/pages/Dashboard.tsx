
import { Header } from "@/components/header";
import { TransactionList } from "@/components/transaction-list";
import { WalletStats } from "@/components/wallet-stats";
import { Button } from "@/components/ui/button";
import { QrCode, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
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
            <Card className="solana-card">
              <CardHeader>
                <CardTitle>Your Wallet</CardTitle>
                <CardDescription>Wallet address and details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-4 bg-solana-dark rounded-lg border border-solana-primary/20">
                  <div className="p-2 bg-white rounded-lg mb-3">
                    <QrCode className="h-32 w-32 text-solana-dark" />
                  </div>
                  <p className="text-xs font-mono bg-solana-primary/10 p-2 rounded-md">
                    8JQvEC27dM58r8aVkeue4pyQQd2SWj7TsJt81YYqXpAq
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2 text-xs text-solana-primary">
                    Copy Address
                  </Button>
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
