import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useRef, useState } from "react";
import { getTransactions } from "@/scripts/balance";
import { useWallet } from "@solana/wallet-adapter-react";
import { getParsedTransactions } from "@/scripts/transactionDetails";
import { Loader2 } from "lucide-react";

export function TransactionList() {
  const wallet = useWallet();
  const [transactions, setParsedTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const parsedTransactions = await getParsedTransactions(
          wallet.publicKey
        );
        setParsedTransactions(parsedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (wallet.publicKey) {
      fetchTransactions();
    }
  }, [wallet.publicKey]);

  return (
    <Card className="solana-card">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Your latest activity on the Solana blockchain
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin text-solana-primary" />
            </div>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-solana-primary/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === "recieve"
                        ? "bg-green-500/10"
                        : "bg-blue-500/10"
                    }`}
                  >
                    {transaction.type === "recieve" ? (
                      <ArrowDown className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowUp className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      {transaction.type === "recieve" ? "Received" : "Sent"} SOL
                    </p>
                    {transaction.type === "send" ? (
                      <p className="text-xs text-muted-foreground">
                        To: {transaction.reciever}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        From: {transaction.sender}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      transaction.type === "recieve" ? "text-green-500" : ""
                    }`}
                  >
                    {transaction.type === "recieve" ? "+" : "-"}
                    {transaction.amountSol} SOL
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.timeStamp}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
