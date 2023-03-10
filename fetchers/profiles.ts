import supabaseServer from "@/lib/supabase-server";

async function getProfiles(){
  const supabase = supabaseServer();

const {data: profiles, error} = await supabase.from('profiles').select('*')

if(error) {
  throw new Error(error.message)
} else if (profiles === null) {
  return []
} else {
  return profiles
}

}

async function getMyProfile(id:string) {

  const supabase = supabaseServer();

  const {data: profile, error} = await supabase.from('profiles').select('*').eq('id', id).single()


if(error) {
  throw new Error(error.message)
} else {
  return profile
}

}


export {getProfiles, getMyProfile}
