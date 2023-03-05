import supabaseServer from "@/lib/supabase-server";


async function getWorkshops(){
  const supabase = supabaseServer();

const {data: workshops, error} = await supabase.from('workshops').select('*, organisation_id(*)')

if(error) {
  throw new Error(error.message)
} else if (workshops === null) {
  return []
} else {
  return workshops
}

}

async function getWorkshop(id:string){
  const supabase = supabaseServer();
const {data: workshop, error} = await supabase.from('workshops').select('*, organisation_id(*)').eq('id', id).single()

if(error) {
  throw new Error(error.message)
} else if (workshop === null) {
 throw new Error('workshop no roganisation found')
} else {
  return workshop
}

}


export {getWorkshops, getWorkshop}
