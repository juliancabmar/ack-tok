import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    const user = req.body;

    console.log(user);

    client.createIfNotExists(user)
      .then(() => {
        res.status(200).json('Loggin Success');
        console.log("Loggin Success");
      });
  }
}