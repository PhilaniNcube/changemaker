import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import {Database} from './schema'

// export const config = {
//   matcher: ['/dashboard/:path*'],
// }

const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  const { data: { session } } = await supabase.auth.getSession()


   const { data:admin, error } = await supabase.rpc("is_admin");



  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  if (admin !== true) {
     const redirectUrl = req.nextUrl.clone()
     redirectUrl.pathname = '/'
     redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
     return NextResponse.redirect(redirectUrl)
    } else {

    return res
    }

  }



  return res

}

export default middleware
