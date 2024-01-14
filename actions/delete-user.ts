"use server"

import supabaseService from "@/lib/service-role"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUser(formData:FormData) {

  const id = formData.get('id') as string;

  if(!id) {
    throw new Error('No id provided')
  }

  const { data, error } = await supabaseService.auth.admin.deleteUser(
  id
)

if(error) {
    throw new Error(error.message)
  }

  revalidatePath(`/dashboard/users`)
  redirect(`/dashboard/users`)
}
