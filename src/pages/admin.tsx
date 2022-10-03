import SignUpForm from '../components/Admin/SignUpForm';
import { useState, useEffect } from 'react';
import { PriceCard } from '../components/Pricing/PriceCard';
import {PriceCardEditable} from '../components/Pricing/PriceCardEditable';
import {useDispatch, useSelector} from 'react-redux'
import { fetchBarbers } from '../features/barbers/barbersSlice';
import {RootState} from '../features/store';
import {BarbersScheme, PriceScheme} from '../mongoDB/model/barbers';
import axios from 'axios';
import { PriceCardModal } from '../components/Pricing/PriceCardModal';

export default function admin() {
  const [selectedBarber, setSelectedBarber] = useState<BarbersScheme>()
  const [anotherPrice, setAnotherPrice] = useState<boolean>(false)

  const pricesStatus = useSelector((state: RootState) => state.barbers.status)
  const allBarbers = useSelector((state: RootState) => state.barbers.allBarbers)
  const dispatch = useDispatch() as any;

  useEffect(() => {
    if (pricesStatus === 'idle') {
      dispatch(fetchBarbers())
    }
  }, [])

  async function addPrice(newPriceCard: any){
    if (selectedBarber){
      const newPrices = [...selectedBarber.prices, newPriceCard]
      const putReq = {
        ...selectedBarber,
        prices: newPrices, 
      }
      const data = await axios.put(
        `http://localhost:3000/api/barbers/?barberId=${selectedBarber._id}`, 
        putReq
      )
    }
    setAnotherPrice(false)
    //dispatch(addPrice())
  }
  return (
    <div>
      <h2 className="border-b-2 text-2xl mt-28">Giovanni's Admin Page</h2>
      <div className='border-b-2'>
        <h2 className="text-2xl">Add/Remove Barber</h2>
        <SignUpForm />
      </div>

      <div className='border-b-2'>
        <h2 className="text-2xl">Select Barber</h2>
        {allBarbers.map((barber: BarbersScheme, index: number) => {
          return (
            <div key={index}>
              <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg"
                onClick={() => setSelectedBarber(barber)}>
                {index + 1}. {barber.name}
              </button>
            </div>
          )
        }
        )}
      </div>

      {/* <div className='border-b-2'> */}
      {/*   <h2 className="text-2xl">Schedule Times</h2> */}
      {/*   <AdminSchedule /> */}
      {/* </div> */}

      <div>
        <h2 className="my-2 text-2xl">Barber Prices</h2>
        <div className="my-8 flex justify-center w-100">

          <div>
            <h1 className='text-4xl'>Displayed on page</h1>
            <table className="border-gray-700 border-2 shadow-2xl mr-8">
              <tbody>
                {selectedBarber?.prices.map((price: PriceScheme) => (
                  <tr key={price._id} className="w-100 bg-gray-700 flex justify-center">
                    <PriceCard 
                      _id={price._id}
                      haircut={price.haircut}
                      description={price.description} 
                      price={price.price}
                      />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h1 className='text-4xl'>Edit</h1>
            <table className="border-gray-700 border-2 shadow-2xl">
              <tbody>
                {selectedBarber?.prices.map((price: PriceScheme) => {
                  return (
                  <tr key={price._id} className="w-100 bg-gray-700 flex justify-center">
                    <PriceCardEditable 
                      _id={price._id}
                      haircut={price.haircut}
                      description={price.description} 
                      price={price.price}
                      />
                  </tr>
                )
                })}
                <tr className="w-100 bg-green-700 flex justify-center">
                  {anotherPrice && selectedBarber ? (
                      <PriceCardModal 
                        setAnotherPrice={setAnotherPrice}
                        anotherPrice={anotherPrice}
                        addPrice={addPrice}/>
                  ) : (<></>) }
                </tr>
                <tr>
                  {anotherPrice && selectedBarber ? (
                    <></>
                  ) : (
                    <td 
                      onClick={() => {
                        if (selectedBarber) {
                          setAnotherPrice(true)}
                        }
                      }
                      className="flex flex-col items-center w-96 h-16">
                      <div 
                        className='w-60 text-center h-8'
                      >Add another price</div>
                      <i className='fa-solid fa-2xl pt-2 text-green-500 fa-plus-circle'></i>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          

        </div>
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   const { db } = await connectToDatabase();

//   const barbers = await db
//     .collection("admin_barbers")
//     .find({})
//     .toArray();

//   // const times = await db
//   //   .collection("time")


//   return {
//     props: {
//       barbersDatabase: JSON.parse(JSON.stringify(barbers))
//     }
//   }

// }
