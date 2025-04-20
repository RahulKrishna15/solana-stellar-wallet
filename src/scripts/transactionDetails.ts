import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

type ParsedTransaction = {
  sender :  string;
  reciever : string;
  amountSol :  number;
  feeSol : number;
  type : "send" | "receive";
  timestamp : string;
}

export const parseSolanaTx = (json : any, publicKey : PublicKey) => {
  try
  {
    const {
      blockTime,
      meta : {preBalances, postBalances, fee, status },
      transaction : {message : {accountKeys}}} = json;

      if(status?.err)
      {
        return null;
      }
      let sender = "";
      let reciever = "";
      let lamports = 0;

      for(let i=0;i<preBalances.length;i++)
      {
        const pre = preBalances[i];
        const post = postBalances[i];
        if(pre > post)
        {
          sender = accountKeys[i].toString();
          lamports = pre - post;
        }
        else if(pre < post)
        {
          reciever = accountKeys[i].toString();
        }
      }
      const amountSol = lamports/LAMPORTS_PER_SOL;
      const feeSol = fee/LAMPORTS_PER_SOL;
      const txType = publicKey.toString() === sender ?  "send" : "recieve"

      return {
        sender, reciever,
        amountSol,
        feeSol,
        type : txType,
        timeStamp : new Date(blockTime * 1000).toLocaleString()
      };
    }
  catch(error)
  {
    console.error("Error parsing transaction", error);
    return null;
  }
}

export const getParsedTransactions = async(publicKey : PublicKey) => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const pubkey = publicKey
  const txs = await connection.getSignaturesForAddress(pubkey, {limit : 10});
  const parsedTxs = [];
  for(const tx of txs)
  {
    const txDetails = await connection.getTransaction(tx.signature.toString(), {maxSupportedTransactionVersion : 0});
    const parsedTx =  parseSolanaTx(txDetails, pubkey);
    if(parsedTx)
    {
      parsedTxs.push(parsedTx);
    }
  }
  console.log({parsedTxs});
  return parsedTxs;
}

