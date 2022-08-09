import SignUpForm from '../components/SignUpForm';
import AdminSchedule from '../components/AdminSchedule';
import { useState } from 'react';
import { connectToDatabase } from '../utils/mongodb';

export default function admin({barbers}: any) {
  const [selectedBarber, setSelectedBarber] = useState({})
  console.log(selectedBarber)
  console.log(barbers)

  return (
    <div>
      <h2 className="border-b-2 text-2xl">Giovanni's Admin Page</h2>
      <div className='border-b-2'>
        <h2 className="text-2xl">Add/Remove Barber</h2>
        <SignUpForm addBarber={"Add Barber"}/>
      </div>

      <div className='border-b-2'>
        <h2 className="text-2xl">Select Barber</h2>
        {barbers.map((barber: any, index: number) => {
          return (
            <div key={barber._id}>
              <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg"
                onClick={() => setSelectedBarber(barber)}>
                  {index + 1}. {barber.firstName}
              </button>
            </div>
          )}
        )}
      </div>

      <div className='border-b-2'>
        <h2 className="text-2xl">Schedule Times</h2>
        <AdminSchedule />
      </div>
    </div> 
  )
}

export async function getServerSideProps() {
  const { db  } = await connectToDatabase();

  const barbers = await db
    .collection("admin_barbers")
    .find({})
    .toArray();

  // const times = await db
  //   .collection("time")


  return {
    props: {
      barbers: JSON.parse(JSON.stringify(barbers))
    }
  }
  
}
