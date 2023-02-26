import { Database } from '@/schema';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

export default () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
