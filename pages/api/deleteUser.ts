// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabaseService from '@/lib/service-role';
import type { NextApiRequest, NextApiResponse } from 'next'


import { z } from "zod";

const bodySchema = z.object({
  id:z.string().uuid()
})

type Data = {
  message: string,
  statusCode?:number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {



if(req.method !== 'DELETE') {
  res.send({message: 'Invalid Method'})
}

  const {id} = bodySchema.parse(req.body)


  try {

const { data, error } = await supabaseService.auth.admin.deleteUser(
  id
)

if(error) {
    res.status(400).json({ message: error.message, statusCode:400 })
} else {
  res.status(204).json({ message: `User deleted: ${data.user.email}`, statusCode: 204 })
}

  } catch (err) {
 res.status(400).json({ message: "Could not delete user", statusCode:400 })
  }


}
