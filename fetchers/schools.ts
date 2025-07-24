import supabaseServer from "@/lib/supabase-server";

async function getSchools() {
  const supabase = await supabaseServer();

  const { data: schools, error } = await supabase.from("schools").select("*");

  if (error) {
    throw new Error(error.message);
  } else if (schools === null) {
    return [];
  } else {
    return schools;
  }
}

export { getSchools };
