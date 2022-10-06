import { Barbers } from "./model/barbers"

//GET: api/barbers
export async function getBarbers(req: any, res: any) {
  try {
    const barbers = await Barbers.find({})

    if(!barbers) return res.status(404).json({error: "Data not found."})
    res.status(200).json(barbers)
    res.end()
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//GET: api/barbers/?barberId=id
//params KEY barberId VALUE id
export async function getSingleBarber(req: any, res: any) {
  try {
    const {barberId} = req.query;

    if(barberId){
      const barber = await Barbers.findById(barberId)
      return res.status(200).json(barber)
    }
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//POST: api/barbers
export async function postBarbers(req: any, res: any) {
  try {
    const barberData = req.body
    if (!barberData) return res.status(404).json( {error: "Data not provided!"} )

    Barbers.create(barberData, function(_: any, data: any) {
      return res.status(200).json(data)
    })
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//PUT: api/barbers/?barberId=id
//params KEY barberId VALUE id
export async function putBarbers(req: any, res: any) {
  try {
    const {barberId} = req.query;
    const barberData = req.body;

    if (barberId && barberData){
      await Barbers.findByIdAndUpdate(barberId, barberData);
      return res.status(200).json(barberData)
    }
    return res.status(404).json( {error: "Data not provided!"} )
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//PUT: api/prices/?barberId=${barberId}&priceId=${priceId}
//params KEY barberId VALUE id
export async function putPrices(req: any, res: any) {
  try {
    const {barberId, priceId} = req.query;

    if (barberId && priceId) {
      const price = await Barbers.findOneAndUpdate(
        { "_id": barberId, "prices._id": priceId },
        { $set: {"prices.$": req.body} }
      )
      return res.status(200).json({updated: priceId})
    }
    return res.status(404).json( {error: "BarberID or PriceID not provided!"} )
  }
  catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }
}

//DELETE: api/barbers/?barberId=id
export async function deleteBarbers(req: any, res: any) {
  try {
    const {barberId} = req.query;

    if (barberId) {
      const barber = await Barbers.findByIdAndDelete(barberId) 
      return res.status(200).json({ deleted: barberId })
    }
    return res.status(404).json( {error: "BarberID not provided!"} )
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//DELETE: api/barbers/?barberId=${barberId}&priceId=${priceId}
export async function deletePriceFromBarber(req: any, res: any) {
  try {
    const {barberId, priceId} = req.query;
    
    if (barberId && priceId) {
      const price = await Barbers.findByIdAndUpdate(
        barberId,
        { $pull: {prices: {_id: priceId}} }
      )
      return res.status(200).json({deleted: priceId})
    }
    return res.status(404).json( {error: "BarberID or PriceID not provided!"} )
  }
  catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }
}
