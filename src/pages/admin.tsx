import { useState, useEffect, FormEvent } from 'react';
import { PriceCard } from '../components/Pricing/PriceCard';
import {PriceCardEditable, PriceData} from '../components/Pricing/PriceCardEditable';
import {useDispatch, useSelector} from 'react-redux'
import { fetchBarbers } from '../features/barbers/barbersSlice';
import {AppDispatch, RootState} from '../features/store';
import {BarbersScheme, PriceScheme} from '../mongoDB/model/barbers';
import axios from 'axios';
import { PriceCardModal } from '../components/Pricing/PriceCardModal';
import {Barber} from '../components/Barbers/Barber';
import AddBarberForm from '../components/Admin/AddBarberForm';
import Link from 'next/link';

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
    const newPrices = [...allBarbers[barberIndex].prices, newPriceCard]
    const putReq = {
      ...allBarbers[barberIndex],
      prices: newPrices, 
    }
    const data = await axios.put(
      `http://localhost:4000/api/barbers/?barberId=${allBarbers[barberIndex]._id}`, 
      putReq
    )
    if (data.status === 200) {
      dispatch(fetchBarbers())
    }
    setAnotherPrice(false)
  }

  async function deleteBarber(id: string){
    const data = await axios.delete(`http://localhost:4000/api/barbers/?barberId=${id}`)
    if (data.status === 200) {
      dispatch(fetchBarbers())
    }
  }

  async function formify(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form: any = e.target;
    const name = form.barberName.value || form.barberName.placeholder;
    const title = form.barberTitle.value || form.barberTitle.placeholder;
    const description = form.barberDescription.value || form.barberDescription.placeholder;

    const reqBody = {
      _id: allBarbers[barberIndex]._id,
      name: name,
      title: title,
      description: description,
    }

    const data = await axios.put(`http://localhost:4000/api/barbers/?barberId=${reqBody._id}`, reqBody)
    if (data.status === 200) {
      dispatch(fetchBarbers())
      if (document.getElementById('edit-barber-form') !== null) {
        const barberForm = document.getElementById('edit-barber-form') as HTMLFormElement;
        barberForm.reset()
      }
    }
  }


  return (
    <div className='bg-gray-700 text-white'>
      <h2 className="border-b-2 border-black text-center text-4xl pt-28 pb-4">Giovanni's Admin Page</h2>
      <div className='flex flex-col py-8 items-center border-b-2 border-black'>
        <AddBarberForm />
      </div>
      <div id="meet-the-barbers" className='anchor'></div>
      <div  className='flex flex-wrap py-8 justify-center border-black border-b-2'>
        <div style={{height: 500}} className='p-6 pt-4 mb-4 text-black rounded-lg border-white border shadow-lg bg-orange-200 max-w-md'>
          <h2 className="text-2xl text-center pb-4">Select/Delete Barber</h2>
          {allBarbers.map((barber: BarbersScheme, index: number) => {
            return (
              <div className='flex' key={index}>
                <button 
                  className="flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg"
                  onClick={() => setBarberIndex(index)}>
                  {index + 1}. {barber.name}
                </button>
                <i 
                  className='flex border border-red-400 p-4 hover:cursor-pointer self-center fa-solid fa-trash-can bg-red-100 text-red-500'
                  onClick={() => deleteBarber(barber._id)}
                ></i>
              </div>
            )
          }
          )}
        </div>
        <div style={{height: 500}} className='text-black mx-4 w-80 p-6 pt-4 rounded-lg border-white border shadow-lg bg-orange-200 max-w-md'>
          <h2 className="text-2xl text-center pb-2">Edit Barber</h2>
          <form id="edit-barber-form" onSubmit={(e) => formify(e)}>
            <label>Name</label>
            <input 
              id='barberName'
              className='flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg' 
              placeholder={allBarbers[barberIndex]?.name}></input>
            <label>Title</label>
            <input 
              id='barberTitle'
              className='flex justify-between p-4 w-56 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg'
              placeholder={allBarbers[barberIndex]?.title}></input>
            <label>Description</label>
            <textarea 
              id='barberDescription'
              className='flex justify-between p-4 w-64 h-40 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg'
              placeholder={allBarbers[barberIndex]?.description}></textarea>
            <input 
              className='flex justify-between mt-4 p-4 bg-white hover:bg-green-100 hover:cursor-pointer text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-green-700 text-lg'
              type={'submit'}></input>
          </form>
        </div>
      </div>

      <h1 className='text-center pt-4 text-2xl'>Displayed on page</h1>
      <div className='border-black border-b-2'>
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

      <div id="pricing" className='anchor'></div>
      <div>
        <div className="py-8 flex justify-center w-100">

          <div>
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
            <table className="border-gray-700 border-2 shadow-2xl">
              <tbody>
                {allBarbers[barberIndex]?.prices.map((price: PriceScheme) => {
                  return (
                  <tr key={price._id + price.haircut} className="w-100 text-black bg-gray-700 flex justify-center">
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
                        className="hover:cursor-pointer text-black border-2 border-green-500 flex flex-col items-center w-96 h-16 bg-green-100">
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
      <Link href='/'>
        <div className='flex w-100 justify-center pb-4'>
          <h2 className="hover:cursor-pointer border border-black text-center w-80 p-2 rounded text-3xl bg-black">Back to Home Page</h2>
        </div>
      </Link>
    </div>
  )
}
