import { getProfiles } from "@/fetchers/profiles";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import UsersTable from "./UsersTable";

export const revalidate = 0;

const page = () => {

const usersData = getProfiles()

  return (
    <div>
      <div className="flex items-center justify-between">
      <h1 className="text-slate-700 font-bold text-2xl ">Users</h1>
      <Link className="w-fit px-6 py-2 bg-masifunde text-white text-xl font-medium flex space-x-2 items-center" href="/dashboard/users/create"><PlusIcon className="h-6 w-6" />Create User</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <UsersTable promise={usersData} />
      </Suspense>
    </div>
  );
};
export default page;
