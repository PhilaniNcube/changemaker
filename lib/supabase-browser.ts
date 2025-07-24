import { Database } from "@/schema";
import { createBrowserClient } from "@supabase/ssr";

// Updated to use @supabase/ssr instead of deprecated auth-helpers
export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
