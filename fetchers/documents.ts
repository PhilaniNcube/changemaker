import supabaseServer from "@/lib/supabase-server";


async function getDocuments(){
  const supabase = supabaseServer();

const {data: documents, error} = await supabase.from('documents').select('*, organisation_id(*)')

if(error) {
  throw new Error(error.message)
} else if (documents === null) {
  return []
} else {
  return documents
}

}

async function getOrgDocuments(id:string){
  const supabase = supabaseServer();

const {data: documents, error} = await supabase.from('documents').select('*, organisation_id(*)').eq('organisation_id', id)

if(error) {
  throw new Error(error.message)
} else if (documents === null) {
  return []
} else {
  return documents
}

}





export {getDocuments, getOrgDocuments}
