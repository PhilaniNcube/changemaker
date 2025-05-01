import supabaseServer from "@/lib/supabase-server";
import { createClient } from "@/utils/supabase/server";
import { create } from "domain";


async function getProfiles(){
  const supabase = supabaseServer();

const {data: profiles, error} = await supabase.from('profiles').select('*, organisation_id(*)')



if(error) {
  throw new Error(error.message)
} else if (profiles === null) {
  return []
} else {
  return profiles
}

}

async function getMyProfile() {

   const supabase = createClient()

   const {data: {user}} = await supabase.auth.getUser()

   if(!user) {
     throw new Error('User not found')
   }


   

  const {data: profile, error} = await supabase.from('profiles').select('*, organisation_id(*)').eq('id', user.id).single()

  console.log({profile, error})


if(error) {
  console.log({error})
  throw new Error(error.message)
} else {
  return profile
}

}

export async function getProfile(id:string) {
  const supabase = createClient()

  const {data: profile, error} = await supabase.from('profiles').select('*, organisation_id(*)').eq('id', id).single()
  console.log({profile, error})
  if(error) {
    console.log({error})
    throw new Error(error.message)
  } else {
    return profile
  }
}


export {getProfiles, getMyProfile}
