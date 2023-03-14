// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabaseService from '@/lib/service-role';
import type { NextApiRequest, NextApiResponse } from 'next'

import { z } from "zod";

const bodySchema = z.object({
  email:z.string().email()
})

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

if(req.method !== 'POST') {
  res.send({message: 'Invalid Method'})
}

  const {email} = bodySchema.parse(req.body)


  try {

  const { data, error } = await supabaseService.auth.admin.createUser({
  email: email,
  password: 'password',
  email_confirm: true
})

if(error) {
    res.status(400).json({ message: error.message })
} else {
  res.status(200).json({ message: `User created: ${data.user.email}` })
}

  } catch (err) {
 res.status(400).json({ message: "Could not create user" })
  }


}
