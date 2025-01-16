
import { deleteUser } from "@/actions/delete-user";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getProfiles } from "@/fetchers/profiles";
import { Database } from "@/schema";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Trash } from "lucide-react";
import Link from "next/link";

type Props = {
  users: Database["public"]["Tables"]["profiles"]["Row"][];
};

const UsersTable = async () => {

  const usersData = await getProfiles();
  console.log(usersData);


  return (
    <div className="w-full mt-8">
      <Table className="w-full overflow-hidden rounded-md ">
        <TableHeader className="py-3 text-lg font-medium border-b bg-slate-300 border-slate-500 text-slate-900">
          <TableHead className="px-3 text-left">First Name</TableHead>
          <TableHead className="text-left">Last Name</TableHead>
          <TableHead className="text-left">Email</TableHead>
          <TableHead className="text-left">Default Password</TableHead>
          <TableHead className="px-4 text-left">View User</TableHead>
        </TableHeader>
        <TableBody className="text-slate-700">
          {usersData.map((profile) => (
            <TableRow
              key={profile.id}
              className="py-3 odd:bg-slate-100 even:bg-slate-200 hover:bg-zinc-300"
            >
              <TableCell className="px-3">{profile.first_name}</TableCell>
              <TableCell>{profile.last_name}</TableCell>
              <TableCell>{`${profile.email}`}</TableCell>
              <TableCell>{`${profile.first_name}123`}</TableCell>
              <TableCell className="flex items-center px-4 space-x-3">
                <Button variant="outline" size="sm">
                  <Link href={`/dashboard/users/${profile.id}`}>View</Link>
                </Button>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={profile.id} />
                  <Button
                    variant="destructive"
                    size="sm"
                    type="submit"
                    className="px-4 py-2 text-white rounded-md"
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
