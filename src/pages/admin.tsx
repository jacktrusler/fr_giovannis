import SignUpForm from '../components/Admin/SignUpForm';
import { useState, useEffect } from 'react';
import { PriceCard } from '../components/Pricing/PriceCard';
import {PriceCardEditable, PriceData} from '../components/Pricing/PriceCardEditable';
import {useDispatch, useSelector} from 'react-redux'
import { fetchBarbers } from '../features/barbers/barbersSlice';
import {AppDispatch, RootState} from '../features/store';
import {BarbersScheme, PriceScheme} from '../mongoDB/model/barbers';
import axios from 'axios';
import { PriceCardModal } from '../components/Pricing/PriceCardModal';
import {Barber} from '../components/Barbers/Barber';

export default function admin() {
  const [anotherPrice, setAnotherPrice] = useState<boolean>(false)
  const [barberIndex, setBarberIndex] = useState<number>(0);

  const barbersStatus = useSelector((state: RootState) => state.barbers.status)
  const allBarbers = useSelector((state: RootState) => state.barbers.allBarbers)
  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    if (barbersStatus === "idle"){
      dispatch(fetchBarbers())
    }
  }, [])

  async function addPrice(newPriceCard: PriceData){
    if (allBarbers[barberIndex]){
      const newPrices = [...allBarbers[barberIndex].prices, newPriceCard]
      const putReq = {
        ...allBarbers[barberIndex],
        prices: newPrices, 
      }
      const data = await axios.put(
        `http://localhost:3000/api/barbers/?barberId=${allBarbers[barberIndex]._id}`, 
        putReq
      )
      if (data) {
        dispatch(fetchBarbers())
      }
    }
    setAnotherPrice(false)
  }

  async function deleteBarber(id: string){
    const data = await axios.delete(`http://localhost:3000/api/barbers/?barberId=${id}`)
    if (data) {
      dispatch(fetchBarbers())
    }
  }

  return (
    <div>
      <h2 className="border-b-2 text-center text-4xl mt-28">Giovanni's Admin Page</h2>
      <div className='flex flex-col py-8 items-center border-b-2'>
        <h2 className="text-2xl">Add Barber</h2>
        <SignUpForm />
      </div>

      <div className='flex justify-center border-b-2'>
        <div className='w-80'>
          <h2 className="text-2xl">Select/Delete Barber</h2>
          {allBarbers.map((barber: BarbersScheme, index: number) => {
            return (
              <div className='flex' key={index}>
                <button 
                  className="flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg"
                  onClick={() => setBarberIndex(index)}>
                  {index + 1}. {barber.name}
                </button>
                <i 
                  className='flex border border-red-400 p-4 hover:cursor-pointer self-center fa-solid fa-trash-can text-red-500'
                  onClick={() => deleteBarber(barber._id)}
                ></i>
              </div>
            )
          }
          )}
        </div>

        <div className='flex flex-col'>
          <h2 className="text-2xl">Edit Barber</h2>
          <label>Name</label>
          <input 
            className='flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg' 
            placeholder={allBarbers[barberIndex]?.name}></input>
          <label>Title</label>
          <input 
            className='flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg'
            placeholder={allBarbers[barberIndex]?.title}></input>
          <label>Description</label>
          <textarea 
            className='flex justify-between p-4 w-64 h-40 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg'
            placeholder={allBarbers[barberIndex]?.description}></textarea>
        </div>
      </div>

      <div className='bg-white border-b-2'>
        <Barber 
          name={allBarbers[barberIndex]?.name}
          description={allBarbers[barberIndex]?.description}
          title={allBarbers[barberIndex]?.title}
          />
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
                {allBarbers[barberIndex]?.prices.map((price: PriceScheme) => (
                  <tr key={price._id + price.haircut} className="w-100 bg-gray-700 flex justify-center">
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
                {allBarbers[barberIndex]?.prices.map((price: PriceScheme) => {
                  return (
                  <tr key={price._id + price.haircut} className="w-100 bg-gray-700 flex justify-center">
                    <PriceCardEditable 
                      currentBarber={allBarbers[barberIndex]}
                      _id={price._id}
                      haircut={price.haircut}
                      description={price.description} 
                      price={price.price}
                      />
                  </tr>
                )
                })}
                <tr className="w-100 bg-green-700 flex justify-center">
                  {anotherPrice && allBarbers[barberIndex] ? (
                      <PriceCardModal 
                        setAnotherPrice={setAnotherPrice}
                        anotherPrice={anotherPrice}
                        addPrice={addPrice}/>
                  ) : (<></>) }
                </tr>
                <tr>
                  {anotherPrice ? (
                    <></>
                  ) : (
                    <td 
                      onClick={() => {
                          setAnotherPrice(true)}
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
