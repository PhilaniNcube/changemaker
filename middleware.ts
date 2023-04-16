import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import {Database} from './schema'


export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  const getsession = await supabase.auth.getSession()


  const {error, data, status} = await supabase.rpc("is_admin")


  if(req.nextUrl.pathname.startsWith('/dashboard')) {
       if (data !== true) {
    return NextResponse.redirect(new URL('/', req.url))

  }
  } else {

    return res
  }





}

