import ProfileDetails from "./ProfileDetails";
import createClient from "../../../lib/supabase-server";
import { getOrganisations } from "@/fetchers/organisations";
import CreateFolder from "./CreateFolder";
import AccountPage from "@/app/account/[id]/AccountPage";


const getProfile = async () => {
   const supabase = createClient();



   const {
     data: { user },
   } = await supabase.auth.getUser();

   const {data:profile, error} = await supabase.from('profiles').select('*, organisation_id(*)').eq('id', user?.id).single()

   if(error) {
    throw new Error(error.message)
   }

   return profile
}


const page = async () => {

  const profileData =  getProfile()
  const organisationsData =  getOrganisations()

  const [profile, organisations] = await Promise.all([
    profileData,
    organisationsData,
  ]);

  return <main>

    <div className="flex flex-col gap-8">
    <AccountPage profile={profile!} organisations={organisations} />
    <div className="w-full mt-3 md:w-2/3 lg:w-1/2">
    <CreateFolder />
    </div>
    </div>
  </main>;
};
export default page;
