"use server";

import supabaseServer from "@/lib/supabase-server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const deleteOrganisation = async ( formData:FormData) => {

  const supabase = createClient()

  const orgId = formData.get("id") as string
  

  try {


    if (!orgId) throw new Error('No id provided')

    // delete from supabase
    const { data, error } = await supabase.from("organisations").delete().eq("id", orgId).select("*")

    console.log("data", data)
    console.log("error", error)

    // if there is an error, throw error
    if (error) throw new Error(error.message)




  } catch (error) {
    console.log(error)
    return {
      error: "Failed to delete organisation",
      success: false,
    }
  }  finally {
  
    revalidatePath(`/dashboard/organisation`)
    revalidatePath(`/dashboard/organisation/${orgId}`)
    revalidatePath(`/`, "layout")
  
  }

  // if there is no id, throw error



  // revalidate the organisations page
 

}
