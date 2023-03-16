
import { Database } from "@/schema";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  promise: Promise<Database['public']['Tables']['profiles']['Row'][]>
}

const UsersTable = async ({promise}:Props) => {

  const profiles = await promise

  return (
    <div className="w-full mt-8">
      <table className="max-w-4xl w-full rounded-md overflow-hidden">
        <thead className="bg-slate-300 border-b border-slate-500 py-3 text-slate-900 text-lg font-medium">
          <th className="px-3">First Name</th>
          <th>Last Name</th>
          <th className="px-4">
           View User
          </th>
        </thead>
        <tbody className="text-slate-700">
          {profiles.map((profile) => (
            <tr
              key={profile.id}
              className="odd:bg-slate-100 even:bg-slate-200 hover:bg-zinc-300 py-3"
            >
              <td className="px-3">{profile.first_name}</td>
              <td>{profile.last_name}</td>
              <td className="px-4">
                <Link href={`/dashboard/users/${profile.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersTable;
