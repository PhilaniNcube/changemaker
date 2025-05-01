import { getOrganisations } from "@/fetchers/organisations";
import { getMyProfile } from "@/fetchers/profiles";
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

    const [profile, organisations] = await Promise.all([
      profileData,
      organisationsData,
    ]);

  return <main className="h-screen bg-white py-6">

    <AccountPage profile={profile} organisations={organisations} />
 
  </main>;
};
export default page;
