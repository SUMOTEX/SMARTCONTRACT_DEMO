import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import HomePage from './Home';

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
  const search = searchParams.q ?? '';
  const result = ""

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>SUMOTEX </Title>
      <HomePage/>
      <Card className="mt-6">
      </Card>
    </main>
  );
}
