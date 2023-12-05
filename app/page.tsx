import { sql } from '@vercel/postgres';
import { Card, Title, Text,Button } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  const createWallet = async () => {
    try {
        const response = await axios.get('https://rpc.sumotex.co/create-wallet');
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>SUMOTEX Smart Contract Platform</Title>
      <Text></Text>
      <Button onClick={()=>createWallet()}>Create Wallet</Button>
    </main>
  );
}
