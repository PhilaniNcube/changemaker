"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const loginAction = async (formData:FormData) => {

  const supabase = createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });

  if(!validatedFields.success) {
    throw new Error('Invalid Fields');
  }

  const {data, error} = await supabase.auth.signInWithPassword({
    email: validatedFields.data.email,
    password: validatedFields.data.password
  });

  if(error) {
    throw new Error(error.message);
  }

  return data;


}
