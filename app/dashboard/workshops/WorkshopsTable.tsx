import { Database } from "@/schema";
import Link from "next/link";

type Props = {
  workshops: Database["public"]["Tables"]["workshops"]["Row"][];
};

const WorkshopsTable = ({ workshops }: Props) => {
  return (
    <table className="w-full shadow text-left bg-white dark:bg-gray-800">
      <thead>
        <tr className="border-b border-gray-300 dark:border-gray-700">
          <th className="py-5 sm:pl-10 pl-2 w-1/5 text-base text-gray-800 dark:text-gray-100">
            Title
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800 dark:text-gray-100">
            Organisation
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800 dark:text-gray-100 pl-20">
            Date
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">
            Time
          </th>
          <th className="py-5 w-1/5 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">
            ...
          </th>
        </tr>
      </thead>
      <tbody>
        {workshops.map((workshop) => (
          <tr
            key={workshop.id}
            className="even:bg-gray-200 hover:bg-gray-50"
          >
            <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
              {workshop.name}
            </td>
            <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
              {workshop.organisation_id}
            </td>
            <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
              {workshop.date}
            </td>
            <td className="pr-2 sm:pr-10 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-right">
              {workshop.time}
            </td>
            <td className="pr-2 sm:pr-10 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-right">
              <Link
                href={`/dashboard/workshops/${workshop.id}`}
                className="px-6 py-2 rounded"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default WorkshopsTable;
