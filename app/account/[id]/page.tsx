import { getOrganisations } from "@/fetchers/organisations";
import { getMyProfile } from "@/fetchers/profiles";
import AccountPage from "./AccountPage";

type Props = {
  params: {
    id: string
  }
}



const page = async ({params: {id}}:Props) => {

  const profileData = getMyProfile(id)
    const organisationsData = getOrganisations();

    const [profile, organisations] = await Promise.all([
      profileData,
      organisationsData,
    ]);

  return <main className="h-screen bg-white">

    <AccountPage profile={profile} organisations={organisations} />
  </main>;
};
export default page;
