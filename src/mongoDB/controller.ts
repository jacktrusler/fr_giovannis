import {PriceData} from "../data/priceData"
import { Prices } from "./model/prices"

//GET: http://localhost:3000/api/prices
export async function getPrices(req: any, res: any) {
  try {
    const prices = await Prices.find({})

    if(!prices) return res.status(404).json({error: "Data not found."})
    res.status(200).json(prices)
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//GET: http://localhost:3000/api/prices/?priceId=id
//params KEY priceId VALUE id
export async function getSinglePrice(req: any, res: any) {
  try {
    const {priceId} = req.query;

    if(priceId){
      const price = await Prices.findById(priceId)
      return res.status(200).json(price)
    }
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//POST: http://localhost:3000/api/prices
export async function postPrices(req: any, res: any) {
  try {
    const priceData = req.body
    if (!priceData) return res.status(404).json( {error: "Data not provided!"} )

    Prices.create(priceData, function(_: any, data: PriceData) {
      return res.status(200).json(data)
    })
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//PUT: http://localhost:3000/api/prices/?priceId=id
//params KEY priceId VALUE id
export async function putPrices(req: any, res: any) {
  try {
    const {priceId} = req.query;
    const priceData = req.body;

    if (priceId && priceData){
      await Prices.findByIdAndUpdate(priceId, priceData);
      return res.status(200).json(priceData)
    }
    return res.status(404).json( {error: "Data not provided!"} )
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//DELETE: http://localhost:3000/api/prices/?priceId=id
export async function deletePrices(req: any, res: any) {
  try {
    const {priceId} = req.query;

    if (priceId) {
      const price = await Prices.findByIdAndDelete(priceId) 
      return res.status(200).json({ deleted: priceId })
    }
    return res.status(404).json( {error: "PriceID not provided!"} )
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}
