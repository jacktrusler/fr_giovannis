import SignUpForm from '../components/SignIn/SignUpForm';
import { FormEvent, useState } from 'react';
import { connectToDatabase } from '../utils/mongodb';
import { dansPrices } from '../data/priceData';
import { PriceCard } from '../components/Pricing/PriceCard';
import {PriceCardEditable} from '../components/Pricing/PriceCardEditable';

export default function admin({ barbersDatabase }: any) {
  const [selectedBarber, setSelectedBarber] = useState({})
  const [edit, setEdit] = useState(false)

  return (
    <div>
      <h2 className="border-b-2 text-2xl mt-28">Giovanni's Admin Page</h2>
      <div className='border-b-2'>
        <h2 className="text-2xl">Add/Remove Barber</h2>
        <SignUpForm addBarber={"Add Barber"} />
      </div>

      <div className='border-b-2'>
        <h2 className="text-2xl">Select Barber</h2>
        {[1,2,3].map((barber: any, index: number) => {
          return (
            <div key={index}>
              <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg"
                onClick={() => setSelectedBarber(barber)}>
                {index + 1}. {barber.firstName}
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
        <h2 className="text-2xl">Barber Prices</h2>
        <div className="flex justify-center w-100">

          <div>
            <h1 className='text-4xl'>Displayed on page</h1>
            <table className="border-gray-700 border-2 shadow-2xl mr-8">
              <tbody>
                {dansPrices.priceData.map((priceCard) => (
                  <tr key={priceCard.haircut} className="w-100 bg-gray-700 flex justify-center">
                    <PriceCard 
                      haircut={priceCard.haircut}
                      description={priceCard.description} 
                      price={priceCard.price}
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
                {dansPrices.priceData.map((priceCard) => (
                  <tr key={priceCard.haircut} className="w-100 bg-gray-700 flex justify-center">
                    <PriceCardEditable 
                      haircut={priceCard.haircut}
                      description={priceCard.description} 
                      price={priceCard.price}
                      />
                  </tr>
                ))}
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
