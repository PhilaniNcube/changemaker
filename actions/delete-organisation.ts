import { createClient } from "@/lib/supabase-browser"
import supabaseServer from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export const deleteOrganisation = async (formData:FormData) => {

  const supabase = supabaseServer();

  const id = formData.get('id') as string;

  // if there is no id, throw error
  if (!id) throw new Error('No id provided')

  // delete from supabase
  const { data, error } = await supabase.from("organisations").delete().eq("id", id)

  // if there is an error, throw error
  if (error) throw new Error(error.message)

  // revalidate the organisations page
  revalidatePath(`/dashboard/organisations`)
}
