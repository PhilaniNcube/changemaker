import { Database } from '@/schema'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'


export const createClient = () => createBrowserSupabaseClient<Database>()
