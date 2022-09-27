import { Prices } from "./model/barbers"
import mongoose, {mongo, Schema} from "mongoose"

export async function getBarbers(req: any, res: any) {
  try {
    // const adminBarbers = await adminBarbersDb.find({})
    //const prices = await priceDb.find({})

    // if (!adminBarbers) {
    //   return res.status(404).json({error: 'not found'})
    // }
    const prices = await Prices.find({})

    if(!prices) return res.status(404).json({error: "Data not found."})
    res.status(200).json(prices)
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}
