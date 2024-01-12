import supabaseServer from "@/lib/supabase-server";




async function getMedia(){
  const supabase = supabaseServer();

const {data: media, error} = await supabase.from('media').select('*, organisation_id(*)')

if(error) {
  throw new Error(error.message)
} else if (media === null) {
  return []
} else {
  return media
}

}


export {getMedia}
