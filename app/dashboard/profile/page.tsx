import ProfileDetails from "./ProfileDetails";
import createClient from "../../../lib/supabase-server";


const getProfile = async () => {
   const supabase = createClient();



   const {
     data: { user },
   } = await supabase.auth.getUser();

   const {data:profile, error} = await supabase.from('profiles').select('*').eq('id', user?.id).single()

   if(error) {
    throw new Error(error.message)
   }

   return profile
}


const page = async () => {

  const profile = await getProfile()

  return <main>
    <ProfileDetails profile={profile} />
  </main>;
};
export default page;
