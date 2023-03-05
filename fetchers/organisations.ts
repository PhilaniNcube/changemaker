import supabaseServer from "@/lib/supabase-server";


async function getOrganisations(){
  const supabase = supabaseServer();

const {data: organisations, error} = await supabase.from('organisations').select('*')

if(error) {
  throw new Error(error.message)
} else if (organisations === null) {
  return []
} else {
  return organisations
}

}

async function getOrganisation(id:string){
  const supabase = supabaseServer();
const {data: organisation, error} = await supabase.from('organisations').select('*').eq('id', id).single()

if(error) {
  throw new Error(error.message)
} else if (organisation === null) {
 throw new Error('organisation no roganisation found')
} else {
  return organisation
}

}


export {getOrganisations, getOrganisation}
