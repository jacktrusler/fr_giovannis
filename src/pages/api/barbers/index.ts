import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from "../../../mongoDB/conn"
import { getBarbers } from "../../../mongoDB/controller"

type Data = {
  method?: any;
  name?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongoDB().catch(() => res.status(405).json({error: "Error in the Connection"}));
  const { method } = req;

  switch(method) {
    case'GET':
      getBarbers(req, res);
      break;
    case'POST':
      res.status(200).json({ 
        method,
        name: 'POST request'
      })
      break;
    case'PUT':
      res.status(200).json({ 
        method,
        name: 'PUT request'
      })
      break;
    case'DELETE':
      res.status(200).json({ 
        method,
        name: 'DELETE request'
      })
      break;
    default:
      res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end( 
        `Method ${method} Not Allowed`
      )
      break;
  }
}
