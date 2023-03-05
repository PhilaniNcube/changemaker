
import OrganisationCard from "./OrganisationCard";
import supabaseServer from '@/lib/supabase-server'
import OrganisationForm from "@/components/Forms/OrganisationForm";
import { getOrganisation } from "@/fetchers/organisations";
import { getDistricts } from "@/fetchers/districts";
import DocumentsUpload from "@/components/Forms/DocumentsUpload";
import { getOrgDocuments } from "@/fetchers/documents";
import { DocumentIcon } from "@heroicons/react/24/outline";

type Props = {
  params: {
    id: string
  }
}

export const revalidate = 0


const page = async({params: {id}}:Props) => {

  const organisationData =  getOrganisation(id);
  const documentsData =  getOrgDocuments(id);
  const districtsData =  getDistricts();

  const [organisation, documents, districts] = await Promise.all([
    organisationData,
    documentsData,
    districtsData,
  ]);

console.log({documents})

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2">
        <OrganisationCard organisation={organisation} />
        <OrganisationForm organisation={organisation} districts={districts} />
      </div>
      <div className="col-span-1">
        <h2 className="font-bold text-slate-700 text-2xl mb-3">Upload a document for this organisation</h2>
        <DocumentsUpload organisation={organisation} />
        <div className="w-full grid grid-cols-2 gap-6 mt-4 py-4 border-t-2 border-gray-600">
          {documents.map((doc) => (
           <span key={doc.id} className="flex items-center space-x-2">
            <div className="w-full aspect-square bg-slate-300 flex flex-col items-center justify-center space-y-3 rounded">
            <DocumentIcon className="text-accent p-2 h-10 w-10" />
            <p className="text-sm md:text-md capitalize font-medium text-slate-800 text-center">{doc.title}</p>
            </div>
           </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
