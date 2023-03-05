import { getOrganisations } from "@/fetchers/organisations";
import supabaseServer from "@/lib/supabase-server";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import AddOrganisation from "./AddOrganisation";
import OrganisationTable from "./OrganisationTable";

export const revalidate = 0;



const page = async () => {

const organisations = await getOrganisations()

console.log({organisations})

  return (
    <div className="w-full">
      <AddOrganisation />
      <Suspense fallback="Loading...">
        <OrganisationTable organisations={organisations!} />
      </Suspense>
    </div>
  );
};
export default page;
