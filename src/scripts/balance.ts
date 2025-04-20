import { Connection, PublicKey, Transaction, clusterApiUrl } from "@solana/web3.js";


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