import OrganisationCard from "./OrganisationCard";
import supabaseServer from "@/lib/supabase-server";
import OrganisationForm from "@/components/Forms/OrganisationForm";
import { getOrganisation } from "@/fetchers/organisations";
import { getDistricts } from "@/fetchers/districts";
import DocumentsUpload from "@/components/Forms/DocumentsUpload";
import { getOrgDocuments } from "@/fetchers/documents";
import { DocumentIcon } from "@heroicons/react/24/outline";
import Upload from "../../documents/Upload";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const revalidate = 0;

const page = async ({ params }: Props) => {
  const { id } = await params;

  const organisationData = getOrganisation(id);
  const documentsData = getOrgDocuments(id);
  const districtsData = getDistricts();

  const [organisation, documents, districts] = await Promise.all([
    organisationData,
    documentsData,
    districtsData,
  ]);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <OrganisationCard organisation={organisation} />
        <OrganisationForm organisation={organisation} districts={districts} />
      </div>
      <div className="col-span-1">
        <h2 className="mb-3 text-2xl font-bold text-slate-700">
          Upload a document for this organisation
        </h2>
        <Upload />
        <div className="grid w-full grid-cols-2 gap-6 py-4 mt-4 border-t-2 border-gray-600">
          {documents.map((doc: any) => (
            <span key={doc.id} className="flex items-center space-x-2">
              <div className="flex flex-col items-center justify-center w-full space-y-3 rounded aspect-square bg-slate-300">
                <DocumentIcon className="w-10 h-10 p-2 text-masifunde" />
                <p className="text-sm font-medium text-center capitalize md:text-md text-slate-800">
                  {doc.title}
                </p>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
