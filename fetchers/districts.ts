import supabaseServer from "@/lib/supabase-server";


async function getDistricts(){
  const supabase = supabaseServer();

const {data: districts, error} = await supabase.from('districts').select('*')

if(error) {
  throw new Error(error.message)
} else if (districts === null) {
  return []
} else {
  return districts
}

}


export {getDistricts}
