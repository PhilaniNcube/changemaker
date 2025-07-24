import supabaseServer from "@/lib/supabase-server";

async function getWorkshops() {
  const supabase = await supabaseServer();

  const { data: workshops, error } = await supabase
    .from("workshops")
    .select("*, organisation_id(*)");

  if (error) {
    throw new Error(error.message);
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (workshops === null) {
    return [];
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return workshops;
  }
}

async function getWorkshop(id: string) {
  const supabase = await supabaseServer();
  const { data: workshop, error } = await supabase
    .from("workshops")
    .select("*, organisation_id(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (workshop === null) {
    throw new Error("workshop no roganisation found");
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return workshop;
  }
}

export { getWorkshops, getWorkshop };
