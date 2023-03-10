import { getProfiles } from "@/fetchers/profiles";
import { Suspense } from "react";
import UsersTable from "./UsersTable";

const page = () => {

const usersData = getProfiles()

  return (
    <div>
      <h1 className="text-slate-700 font-bold text-2xl ">Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <UsersTable promise={usersData} />
      </Suspense>
    </div>
  );
};
export default page;
