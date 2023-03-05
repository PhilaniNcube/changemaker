
import OrganisationCard from "./OrganisationCard";
import supabaseServer from '@/lib/supabase-server'
import OrganisationForm from "@/components/Forms/OrganisationForm";
import { getOrganisation } from "@/fetchers/organisations";
import { getDistricts } from "@/fetchers/districts";
import DocumentsUpload from "@/components/Forms/DocumentsUpload";

type Props = {
  params: {
    id: string
  }
}

export const revalidate = 0


const page = async({params: {id}}:Props) => {

  const organisation = await getOrganisation(id);
  const districts = await getDistricts();



  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2">
        <OrganisationCard organisation={organisation} />
        <OrganisationForm organisation={organisation} districts={districts} />
      </div>
      <div className="col-span-1">
        <h2 className="font-bold text-slate-700 text-2xl mb-3">Upload a document for this organisation</h2>
        <DocumentsUpload organisation={organisation} />
      </div>
    </div>
  );
};
export default page;
