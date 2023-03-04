import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import OrganisationTable from "./OrganisationTable";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium text-slate-800">Organisations</h1>
        <button className="bg-accent hover:bg-orange-500 px-4 py-2 rounded-md text-white flex items-center space-x-3">
          <PlusIcon className="h-8 w-8" /> <span>Add</span>
        </button>
      </div>
      <OrganisationTable />
    </div>
  );
};
export default page;
