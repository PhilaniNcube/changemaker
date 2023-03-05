import { getDocuments } from "@/fetchers/documents";
import { DocumentIcon } from "@heroicons/react/24/outline";

const page = async () => {

  const documentsData = getDocuments()

  const [documents] = await Promise.all([documentsData]);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-slate-700">Documents</h1>
      </div>
      <table className="w-full max-w-4xl shadow text-left bg-white dark:bg-gray-800">
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <th className="py-5 sm:pl-10 pl-2 w-1/5 text-base text-gray-800 dark:text-gray-100">
              Title
            </th>
            <th className="py-5 sm:pl-10 pl-2 w-1/5 text-base text-gray-800 dark:text-gray-100">
              Organisation
            </th>

            <th className="py-5 w-1/5 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">
              ...
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="even:bg-gray-200 hover:bg-gray-50">
              <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                {doc.title}
              </td>
              <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                {doc.organisation_id.name!}
              </td>

              <td className="pr-2 sm:pr-10 py-5 text-gray-800 flex justify-end dark:text-gray-100 text-xs sm:text-sm text-right">
                <a
                  href={doc.src!}
                  className="bg-accent hover:bg-accent/90 px-4 py-2 w-fit rounded-lg text-white font-medium text-lg capitalize flex items-center space-x-2"
                >
                 <DocumentIcon className="h-6 w-6" /> <span>View</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default page;
