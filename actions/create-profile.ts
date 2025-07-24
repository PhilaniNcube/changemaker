"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const profileSchema = z.object({
  id: z.string().uuid(),
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Slug must be at least 3 characters long" }),
  email: z.string().email(),
  organisation_id: z.string().uuid(),
});

export async function createProfileAction(formData: FormData) {
  const supabase = await createClient();
}
