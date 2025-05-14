import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { toast } from "sonner";

interface SendDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (recipient: string, amount: number) => Promise<string | null>;
}

export function SendDialog({ isOpen, onClose, onSend }: SendDialogProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const signature = await onSend(recipient, parseFloat(amount));
      if (signature) {
        setIsSuccess(true);
        toast.success("Transaction Successful");

      } else {
        toast.error("Transaction Failed");
      }
    } catch (error) {
      toast.error("Transaction Failed");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send SOL</DialogTitle>
        </DialogHeader>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 animate-bounce" />
            <p className="mt-4 text-lg font-medium text-center">
              Transaction Successful!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient address"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (SOL)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
                min="0"
                step="0.000000001"
                disabled={isLoading}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="solana-button-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Send"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
