'use client'
import React, { useState } from 'react';
import { Card, Title, Text,Button } from '@tremor/react';
import axios from 'axios';


export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState('');

const createWallet = async () => {
  try {
      const response = await axios.post('https://rpc.sumotex.co/create-wallet');
      console.log(response)
      if(response.data && response.data.wallet_address) {
          setWalletAddress(response.data.wallet_address);
      }
      return response.data;
  } catch (error) {
      console.error("Error creating wallet:", error);
      return null;
  }
};

  return (
    <main className="p-4 md:p-10 mx-auto max-w-6xl">
      <Button onClick={()=>createWallet()}>Create Wallet</Button>
    </main>
  );
}
