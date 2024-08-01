"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const loginAction = async (prev:unknown, formData:FormData) => {

  const supabase = createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });

  if(!validatedFields.success) {
    return {
      status: 400,
      error: {
        message: 'Invalid fields',
        data: validatedFields.error.flatten().fieldErrors
    }
  }
}

  const {data, error} = await supabase.auth.signInWithPassword({
    email: validatedFields.data.email,
    password: validatedFields.data.password
  });

  if (error) {
			return {
				status: 500,
				error: {
					message: error.message,
					data: error.cause,
				},
			};
		}

redirect("/dashboard");


}
