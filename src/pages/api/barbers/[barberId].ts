import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from "../../../mongoDB/conn"
import { getSinglePrice, deletePrices, getPrices, postPrices, putPrices } from "../../../mongoDB/controller"

type Data = {
  method?: any;
  name?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  connectMongoDB().catch(() => res.status(405).json({error: "Error in the Connection"}));

  switch(method) {
    case'GET':
      getSinglePrice(req, res);
      break;
    default:
      res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end( 
        `Method ${method} Not Allowed`
      )
      break;
  }
}
