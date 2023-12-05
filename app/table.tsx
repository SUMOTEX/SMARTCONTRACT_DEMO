import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
      </TableBody>
    </Table>
  );
}
