import { getProfiles } from "@/fetchers/profiles";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import UsersTable from "./UsersTable";

export const revalidate = 0;

const page = async () => {




  return (
    <div>
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-slate-700 ">Users</h1>
      <Link className="flex items-center px-6 py-2 space-x-2 text-xl font-medium text-white w-fit bg-masifunde" href="/dashboard/users/create"><PlusIcon className="w-6 h-6" />Create User</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersTable />
      </Suspense>
    </div>
  );
};
export default page;
