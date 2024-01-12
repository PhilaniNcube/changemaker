

import { Database } from "@/schema";
import Link from "next/link";
import { DeleteOrganisation } from "./DeleteOrganisation";


type Props = {
  organisations: Database['public']['Tables']['organisations']['Row'][]
};

const OrganisationTable = ({ organisations }:Props) => {



  return (
    <table className="w-full shadow text-left bg-white ">
      <thead>
        <tr className="border-b border-gray-300 ">
          <th className="py-5 sm:pl-10 pl-2 w-1/5 text-base text-gray-800 ">
            Name
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800 ">
            Website
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800  pl-20">
            Email
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800  pr-2 sm:pr-10 text-right">
            Contact
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800  pr-2 sm:pr-10 text-right">

          </th>
        </tr>
      </thead>
      <tbody>
        {organisations.map((organisation) => (
          <tr
            key={organisation.id}
            className="even:bg-gray-200 hover:bg-gray-50"
          >
            <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
              {organisation.name}
            </td>
            <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
              {organisation.website}
            </td>
            <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
              {organisation.email}
            </td>
            <td className="pr-2 sm:pr-10 py-5 text-gray-800  text-xs sm:text-sm text-right">
              {organisation.tel}
            </td>
            <td className="pr-2 sm:pr-10 py-5 text-gray-800  text-xs sm:text-sm text-right flex items-center gap-x-4">
              <DeleteOrganisation id={organisation.id} />
              <Link href={`/dashboard/organisation/${organisation.id}`} className="px-6 py-2 rounded">
              View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default OrganisationTable;
