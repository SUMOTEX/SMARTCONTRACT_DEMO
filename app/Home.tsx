'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@tremor/react';

export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [privateKey,setPrivateKey]=useState();
  const [hasPrivateKey, setHasPrivateKey] = useState(false);

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
    const headers = {"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}
    try {
        axios.post('https://rpc.sumotex.co/create-nft-contract',JSON.stringify(postData)).then((response) => {
            console.log(response.status, response.data);
          });
    } catch (error) {
        console.error("Error creating NFT contract:", error);
    }
};


  return (
    <main className="p-2 md:p-4 mx-auto max-w-12xl">
      {walletAddress && <div>Wallet Address: {walletAddress}</div>}
      {!hasPrivateKey && (
        <Button onClick={createWallet}>Create Wallet</Button>
      )}
       <Button onClick={createNFTContract}>Create NFT Contract</Button>
    </main>
  );
}
