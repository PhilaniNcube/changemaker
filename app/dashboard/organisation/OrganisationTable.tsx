const OrganisationTable = () => {
  return (
    <table className="w-full shadow text-left bg-white dark:bg-gray-800">

      <thead>
        <tr className="border-b border-gray-300 dark:border-gray-700">
          <th className="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800 dark:text-gray-100">
            Name
          </th>
          <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100">
            Website
          </th>
          <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pl-20">
            Email
          </th>
          <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">
            Contact
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-gray-200 hover:bg-gray-50">
          <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
            Masifunde
          </td>
          <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
            www.masifunde.co.za
          </td>
          <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
            andresberlin@gmail.com
          </td>
          <td className="pr-2 sm:pr-10 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-right">
            0817551279
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default OrganisationTable;
