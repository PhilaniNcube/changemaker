import ProfileDetails from "./ProfileDetails";
import createClient from "../../../lib/supabase-server";
import { getOrganisations } from "@/fetchers/organisations";


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
    <ProfileDetails profile={profile!} organisations={organisations} />
  </main>;
};
export default page;
