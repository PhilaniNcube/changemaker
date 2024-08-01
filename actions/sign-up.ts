"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export async function signUpAction(prevState:unknown, formData:FormData) {
  const supabase = createClient()

  const origin = headers().get('origin');

  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
  });

  if (!validatedFields.success) {
    return {
      status: 400,
      error: {
        message: 'Invalid fields',
        data: validatedFields.error.flatten().fieldErrors,
    }
  }
}

  const { email, password, first_name, last_name } = validatedFields.data;

  const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					organisation_id: "01baf535-0d33-4d0e-beae-27adcd699c53",
          first_name,
          last_name,
				},
			},
		});

  if (error) {
   return {
    status: 500,
    error: {
      message: error.message,
      data: error.cause,
    }
   }
  }

  return {
    status: 200,
    message: 'Please check your email to verify your account',
  };
}
