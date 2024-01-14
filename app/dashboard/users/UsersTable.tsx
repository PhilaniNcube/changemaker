
import { deleteUser } from "@/actions/delete-user";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database } from "@/schema";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Trash } from "lucide-react";
import Link from "next/link";

type Props = {
  promise: Promise<Database['public']['Tables']['profiles']['Row'][]>
}

const UsersTable = async ({promise}:Props) => {

  const profiles = await promise

  return (
    <div className="w-full mt-8">
      <Table className=" w-full rounded-md overflow-hidden">
        <TableHeader className="bg-slate-300 border-b border-slate-500 py-3 text-slate-900 text-lg font-medium">
          <TableHead className="px-3 text-left">First Name</TableHead>
          <TableHead className="text-left">Last Name</TableHead>
          <TableHead className="text-left">Email</TableHead>
          <TableHead className="text-left">Default Password</TableHead>
          <TableHead className="px-4 text-left">View User</TableHead>
        </TableHeader>
        <TableBody className="text-slate-700">
          {profiles.map((profile) => (
            <TableRow
              key={profile.id}
              className="odd:bg-slate-100 even:bg-slate-200 hover:bg-zinc-300 py-3"
            >
              <TableCell className="px-3">{profile.first_name}</TableCell>
              <TableCell>{profile.last_name}</TableCell>
              <TableCell>{`${profile.email}`}</TableCell>
              <TableCell>{`${profile.first_name}123`}</TableCell>
              <TableCell className="px-4 space-x-3 flex items-center">
                <Button variant="outline" size="sm">
                  <Link href={`/dashboard/users/${profile.id}`}>View</Link>
                </Button>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={profile.id} />
                  <Button
                    variant="destructive"
                    size="sm"
                    type="submit"
                    className="text-white px-4 py-2 rounded-md"
                  >
                    <Trash />
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default UsersTable;
