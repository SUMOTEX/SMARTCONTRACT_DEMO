'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@tremor/react';

export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [contractAddress,setContractAddress]=useState('');
  const [walletBalance,setwalletBalance] = useState(0);
  const [privateKey,setPrivateKey]=useState();
  const [hasPrivateKey, setHasPrivateKey] = useState(false);

   // New state variables for contract creation inputs
   const [contractName, setContractName] = useState('');
   const [contractSymbol, setContractSymbol] = useState('');
 
  useEffect(() => {
    const privateKey = localStorage.getItem('privateKey');
    const walletAddress = localStorage.getItem('walletAddress');    

    if (privateKey) {
      setHasPrivateKey(true);
      setWalletAddress(walletAddress);
      setPrivateKey(privateKey);
      
      // Optionally, fetch the public key here if your API supports it
    }
  }, []);

  const createWallet = async () => {
    try {
      const response = await axios.post('https://rpc.sumotex.co/create-wallet');
      if (response.data && response.data.result.wallet_address) {
        setWalletAddress(response.data.result.wallet_address);
        localStorage.setItem('privateKey', response.data.result.private_key);
        localStorage.setItem('walletAddress', response.data.result.wallet_address);
        setHasPrivateKey(true);
      }
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  };
  const createNFTContract = async () => {
    const postData = {
        call_address:"",
        private_key:""
    }
    try {
        axios.post('https://rpc.sumotex.co/create-nft-contract',JSON.stringify(postData)).then((response) => {
            console.log(response.status, response.data);
            setContractAddress(response.data.result.contract_address);
          });
    } catch (error) {
        console.error("Error creating NFT contract:", error);
    }
};


  return (
    <main className="p-2 md:p-4 mx-auto max-w-12xl">
      {walletAddress && <div className="mb-2">Wallet Address: {walletAddress}</div>}
      {walletBalance!=0 && <div className="mb-2">Wallet Balance: {walletBalance} SMTX</div>}
      {contractAddress && <div className="mb-2">NFT Contract Address: {contractAddress}</div>}
      <div className='mb-4'>
        <input
          type="text"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
          placeholder="Contract Name"
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={contractSymbol}
          onChange={(e) => setContractSymbol(e.target.value)}
          placeholder="Contract Symbol"
          className="mr-2 p-2 border border-gray-300 rounded"
        />
      </div>
      {!hasPrivateKey && (
        <Button onClick={createWallet}>Create Wallet</Button>
      )}
       <Button onClick={createNFTContract}>Create NFT Contract</Button>
    </main>
  );
}
