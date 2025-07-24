import { revalidate } from "@/app/layout";
import { getDocuments } from "@/fetchers/documents";
import { DocumentIcon } from "@heroicons/react/24/outline";
import DeleteButton from "./DeleteButton";
import Upload from "./Upload";

const page = async () => {
  const documentsData = getDocuments();

  const [documents] = await Promise.all([documentsData]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full max-w-4xl mb-2">
        <h1 className="text-2xl font-bold text-slate-700">Documents</h1>

        <Upload />
      </div>
      <table className="w-full max-w-4xl mt-3 text-left bg-white shadow">
        <thead>
          <tr className="border-b border-gray-300 ">
            <th className="w-1/5 py-5 pl-2 text-base text-gray-800 sm:pl-10 ">
              Title
            </th>
            <th className="w-1/5 py-5 pl-2 text-base text-gray-800 sm:pl-10 ">
              Organisation
            </th>

            <th className="w-1/5 py-5 pr-2 text-base text-right text-gray-800 sm:pr-10">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc: any) => (
            <tr key={doc.id} className="even:bg-gray-200 hover:bg-gray-50">
              <td className="py-5 pl-2 pr-2 text-xs text-gray-800 sm:pl-10 sm:text-sm">
                {doc.title}
              </td>
              <td className="py-5 pl-2 pr-2 text-xs text-gray-800 sm:pl-10 sm:text-sm">
                {doc.organisation_id.name!}
              </td>

              <td className="flex justify-end py-5 pr-2 text-xs text-right text-gray-800 sm:pr-10 sm:text-sm">
                <a
                  href={doc.src!}
                  className="flex items-center px-4 py-2 space-x-2 text-lg font-medium text-white capitalize rounded-lg bg-masifunde hover:bg-masifunde/90 w-fit"
                >
                  <DocumentIcon className="w-6 h-6" /> <span>View</span>
                </a>
                <DeleteButton id={doc.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default page;
