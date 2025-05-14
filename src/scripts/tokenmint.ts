import {
  createAndMint,
  mplTokenMetadata,
  TokenStandard,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

import {
  generateSigner,
  percentAmount,
  signerIdentity,
  publicKey as umiPublicKey,
} from "@metaplex-foundation/umi";

import { createSignerFromWalletAdapter } from "@metaplex-foundation/umi-signer-wallet-adapters";
import axios from "axios";
import { WalletContextState } from "@solana/wallet-adapter-react";

interface TokenData {
  name: string;
  symbol: string;
  imageFile: File | null;
  decimals: string;
  supply: string;
  description: string;
}

const createTokenMint = async (wallet: WalletContextState, data: TokenData) => {
  if (!wallet.publicKey) throw new Error("Wallet not connected");
  if (!wallet.signTransaction)
    throw new Error("Wallet does not support signing");
  if (!data.imageFile) throw new Error("Image file is required");

  const PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
  const PINATA_SECRET_API_KEY = import.meta.env.VITE_PINATA_SECRET_API_KEY;

  if (!PINATA_API_KEY || !PINATA_SECRET_API_KEY) {
    throw new Error(
      "Pinata API keys are not configured. Please check your .env file."
    );
  }

  async function uploadImage(): Promise<string> {
    const formData = new FormData();
    formData.append("file", data.imageFile!);
    console.log("PINATA API KEY:", PINATA_API_KEY);
    console.log("PINATA SECRET:", PINATA_SECRET_API_KEY);

    const metadata = JSON.stringify({ name: data.name });
    formData.append("pinataMetadata", metadata);

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      }
    );

    return res.data.IpfsHash;
  }

  async function uploadMetadata(): Promise<string> {
    const imageCID = await uploadImage();

    const metadata = {
      name: data.name,
      symbol: data.symbol,
      description: data.description,
      image: `https://ipfs.io/ipfs/${imageCID}`,
    };

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      metadata,
      {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      }
    );

    return res.data.IpfsHash;
  }

  const metadataCID = await uploadMetadata();

  // Setup UMI and wallet
  const umi = createUmi("https://api.devnet.solana.com");
  const userWalletSigner = createSignerFromWalletAdapter(wallet);
  umi.use(signerIdentity(userWalletSigner));
  umi.use(mplTokenMetadata());

  const mint = generateSigner(umi);

  const mintTx = await createAndMint(umi, {
    mint,
    authority: umi.identity,
    name: data.name,
    symbol: data.symbol,
    uri: `https://ipfs.io/ipfs/${metadataCID}`,
    sellerFeeBasisPoints: percentAmount(0),
    decimals: parseInt(data.decimals),
    amount: BigInt(Number(data.supply) * 10 ** 9),
    tokenOwner: umiPublicKey(wallet.publicKey.toBase58()), // ✅ FIXED here
    tokenStandard: TokenStandard.Fungible,
  }).sendAndConfirm(umi);

  console.log("✅ Successfully minted tokens to", wallet.publicKey.toBase58());
  console.log("Token Mint Address:", mint.publicKey.toString());
};

export { createTokenMint };
