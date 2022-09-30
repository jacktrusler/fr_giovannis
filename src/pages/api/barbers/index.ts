import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from "../../../mongoDB/conn"
import { deleteBarbers, getBarbers, postBarbers, putBarbers } from "../../../mongoDB/controller"

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
      postBarbers(req, res);
      break;
    case'PUT':
      putBarbers(req, res);
      break;
    case'DELETE':
      deleteBarbers(req, res);
      break;
    default:
      res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end( 
        `Method ${method} Not Allowed`
      )
      break;
  }
}
