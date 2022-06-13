// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createEnxoval } from '../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const com = JSON.parse(req.body);
    const ite = JSON.parse(req.body);
    const tem = JSON.parse(req.body);
    await createEnxoval(com, ite, tem);
    return res.status(200).json({ message: 'Boa fi!' })
  }
  res.status(200).json({ name: 'John Doe' })
}
