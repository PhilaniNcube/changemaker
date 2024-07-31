import { z } from "zod";

const envVariables = z.object({
	NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
	NEXT_PUBLIC_SANITY_DATASET: z.string(),
	INSTAGRAM_APP_ID: z.string(),
	INSTAGRAM_APP_SECRET: z.string(),
	INSTAGRAM_TOKEN: z.string(),
	NEXT_PUBLIC_SUPABASE_URL: z.string(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
	ACCESS_TOKEN: z.string(),
	NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
	NEXT_PUBLIC_CLOUDINARY_API_KEY: z.string(),
	CLOUDINARY_SECRET: z.string(),
	SUPABASE_SERVICE_ROLE: z.string(),
	MAILTRAP_TOKEN: z.string(),
	NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
});


envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
