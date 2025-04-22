import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import { useWallet } from "@solana/wallet-adapter-react";

interface ReceiveDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReceiveDialog({ isOpen, onClose }: ReceiveDialogProps) {
  const { publicKey } = useWallet();

  if (!publicKey) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Receive SOL</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 p-1">
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG value={publicKey.toString()} size={200} />
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Your Public Key
            </p>
            <p className="text-sm break-all font-mono">
              {publicKey.toString()}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
