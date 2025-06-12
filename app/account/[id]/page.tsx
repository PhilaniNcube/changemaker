import { getOrganisations } from "@/fetchers/organisations";
import { getMyProfile } from "@/fetchers/profiles";
import { getDocuments } from "@/fetchers/documents";
import AccountPage from "./AccountPage";
import Documents from "../documents/Documents";

type Props = {
  params: {
    id: string
  }
}



const page = async ({params: {id}}:Props) => {

  const profileData = getMyProfile()
    const organisationsData = getOrganisations();
    const documentsData = getDocuments();

    const [profile, organisations, documents] = await Promise.all([
      profileData,
      organisationsData,
      documentsData,
    ]);

  return <main className="h-screen bg-white py-6">

    <AccountPage profile={profile} organisations={organisations} documents={documents} />
 
  </main>;
};
export default page;
