import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Background } from "@/components/background";
import { createTokenMint } from "@/scripts/tokenmint";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";

export default function CreateToken() {
  const wallet = useWallet();
  const { sendTransaction } = useWallet();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    description: "",
    imageFile: null as File | null,
    decimals: "9",
    supply: "",
    freezeAuthority: "",
    mintAuthority: "",
  });

  const handleInputChange = (field: string, value: string | File) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet.publicKey) {
      console.error("Wallet not connected");
      return;
    }
    const loadingToast = toast.loading("Creating token...");
    try {
      const tokenMint = await createTokenMint(wallet, formData);
      console.log("Token mint:", tokenMint);
      console.log("Creating token with data:", formData);

      toast.dismiss(loadingToast);
      toast.success("Token created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating token:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to create token");
    }
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Background />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full flex items-center justify-center px-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-solana-primary/10 h-[95vh] w-full max-w-7xl"
        >
          <div className="flex flex-col h-full md:flex  ">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                className="text-solana-primary hover:bg-solana-primary/10 px-3 py-1.5 rounded-lg transition-all duration-200"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-primary to-solana-accent">
                Create SPL Token
              </h1>
              <div className="w-24" /> {/* Spacer to maintain layout */}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 grid grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Token Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="e.g. My Awesome Token"
                    required
                    className="h-11 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symbol" className="text-base">
                    Token Symbol
                  </Label>
                  <Input
                    id="symbol"
                    value={formData.symbol}
                    onChange={(e) =>
                      handleInputChange("symbol", e.target.value)
                    }
                    placeholder="e.g. MAT"
                    required
                    className="h-11 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe your token..."
                    className="h-32 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageFile" className="text-base">
                    Token Image
                  </Label>
                  <Input
                    id="imageFile"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleInputChange("imageFile", file);
                      }
                    }}
                    required
                    className="h-11 text-base"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="decimals" className="text-base">
                      Decimals
                    </Label>
                    <Input
                      id="decimals"
                      type="number"
                      value={formData.decimals}
                      onChange={(e) =>
                        handleInputChange("decimals", e.target.value)
                      }
                      min="0"
                      max="9"
                      required
                      className="h-11 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supply" className="text-base">
                      Initial Supply
                    </Label>
                    <Input
                      id="supply"
                      type="number"
                      value={formData.supply}
                      onChange={(e) =>
                        handleInputChange("supply", e.target.value)
                      }
                      placeholder="1000000"
                      required
                      className="h-11 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Advanced Settings</h3>

                  <div className="space-y-2">
                    <Label htmlFor="freezeAuthority" className="text-base">
                      Freeze Authority (Optional)
                    </Label>
                    <Input
                      id="freezeAuthority"
                      value={formData.freezeAuthority}
                      onChange={(e) =>
                        handleInputChange("freezeAuthority", e.target.value)
                      }
                      placeholder="Public key of freeze authority"
                      className="h-11 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mintAuthority" className="text-base">
                      Mint Authority (Optional)
                    </Label>
                    <Input
                      id="mintAuthority"
                      value={formData.mintAuthority}
                      onChange={(e) =>
                        handleInputChange("mintAuthority", e.target.value)
                      }
                      placeholder="Public key of mint authority"
                      className="h-11 text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex justify-center mt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-2xl"
                >
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg solana-button-primary"
                  >
                    Create Token
                  </Button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
