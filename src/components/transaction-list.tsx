
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Transaction = {
  id: string;
  type: 'incoming' | 'outgoing';
  amount: string;
  address: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
};

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'incoming',
    amount: '2.5',
    address: 'EtW...a1hq',
    date: '2025-04-18',
    status: 'completed'
  },
  {
    id: '2',
    type: 'outgoing',
    amount: '0.75',
    address: 'Ftr...9kL3',
    date: '2025-04-17',
    status: 'completed'
  },
  {
    id: '3',
    type: 'incoming',
    amount: '1.2',
    address: 'Ghy...7Plm',
    date: '2025-04-15',
    status: 'completed'
  },
  {
    id: '4',
    type: 'outgoing',
    amount: '3.0',
    address: 'Jki...4Sd2',
    date: '2025-04-13',
    status: 'completed'
  }
];

export function TransactionList() {
  return (
    <Card className="solana-card">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest activity on the Solana blockchain</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {mockTransactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between p-3 rounded-lg hover:bg-solana-primary/5 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.type === 'incoming' ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                  {transaction.type === 'incoming' ? (
                    <ArrowDown className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowUp className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {transaction.type === 'incoming' ? 'Received' : 'Sent'} SOL
                  </p>
                  <p className="text-xs text-muted-foreground">To: {transaction.address}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${transaction.type === 'incoming' ? 'text-green-500' : ''}`}>
                  {transaction.type === 'incoming' ? '+' : '-'}{transaction.amount} SOL
                </p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
