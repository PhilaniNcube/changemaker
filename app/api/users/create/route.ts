import supabaseService from "@/lib/service-role";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email:z.string().email()
})

export async function POST(request: Request) {

  const {email} = bodySchema.parse(request.body)

//       const { data, error } = await supabaseService.auth.admin.createUser({
//   email: email,
//   password: 'password',
//   email_confirm: true
// })


 return NextResponse.json({ email })


}
