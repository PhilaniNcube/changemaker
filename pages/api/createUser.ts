// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabaseService from '@/lib/service-role';
import type { NextApiRequest, NextApiResponse } from 'next'
import {MailtrapClient} from 'mailtrap'

import { z } from "zod";

const bodySchema = z.object({
  email:z.string().email(),
  first_name:z.string(),
  last_name:z.string(),
  organisation_id:z.string()
})

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const client = new MailtrapClient({token: process.env.MAILTRAP_TOKEN!})

if(req.method !== 'POST') {
  res.send({message: 'Invalid Method'})
}

  const {email, first_name,last_name, organisation_id} = bodySchema.parse(req.body)


  try {

  const { data, error } = await supabaseService.auth.admin.createUser({
  email: email,
  password: `${first_name}123`,
  email_confirm: true,
  user_metadata: {
    first_name: first_name,
    last_name: last_name,
    organisation_id:organisation_id
  }

})

console.log({data, error})

if(error !== null) {
    res.status(400).json({ message: error.message })
} else {


  await client.send({
    from: {email: 'info@changemaker-network.org'},
    to: [{email: `${data?.user?.email}`}],
    subject: 'A user for you has been created on ChangeMaker Network',
    text: `Hello, a user has been created for you on the ChangeMaker Network, you can log in with the email address: <strong>${data.user.email}</strong>,  and you can use the temporary password: <strong>${first_name}123</strong>. Please change it as soon as possible. Please visit <a href="https://changemaker.vercel.app">https://changemaker.vercel.app</a> to set your own password.`
  })

    res.status(200).json({ message: `User created: ${data.user.email}` })
}

  } catch (err) {
     res.status(400).json({ message: "Could not create user" })
  }


}
