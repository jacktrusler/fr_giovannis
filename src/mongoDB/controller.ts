import { Barbers } from "./model/barbers"

//GET: http://localhost:3000/api/barbers
export async function getBarbers(req: any, res: any) {
  try {
    const barbers = await Barbers.find({})

    if(!barbers) return res.status(404).json({error: "Data not found."})
    res.status(200).json(barbers)
  } catch {
    res.status(404).json( {error: "Error While Fetching Data"})
  }  
}

//GET: http://localhost:3000/api/barbers/?barberId=id
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

//POST: http://localhost:3000/api/barbers
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

//PUT: http://localhost:3000/api/barbers/?barberId=id
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

//DELETE: http://localhost:3000/api/barbers/?barberId=id
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
