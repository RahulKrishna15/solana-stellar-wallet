import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

export const getBalance = async (publicKey) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const balance = await connection.getBalance(publicKey);
  return balance;
};


export const getPrice = async()=>{
  const url = 'https://api.coingecko.com/api/v3/coins/solana';
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const response = await fetch(url, options);
  const data = await response.json();
  return data.market_data.current_price.usd; 
}

export const getTransactions = async(publicKey: PublicKey) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const transactions = await connection.getSignaturesForAddress(publicKey, {limit: 10});
  console.log(transactions) ;
  return transactions;
}


export const makeTransaction = async(reciever : PublicKey, amount : number, sender :  PublicKey, sendTransaction : any ) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const transaction = new Transaction();
  try
  {
    transaction.add(
      SystemProgram.transfer({
        fromPubkey : sender,
        toPubkey : reciever,
        lamports : amount * LAMPORTS_PER_SOL
      })
    )
    const signature = await sendTransaction(transaction, connection)
    console.log("Transaction sent successfully", signature);
    return signature;
  }
  catch(error)
  {
    console.error("Error sending transaction", error);
    return null;
  }
}

  