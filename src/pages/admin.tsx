import SignUpForm from '../components/SignIn/SignUpForm';
import AdminSchedule from '../components/Admin/AdminSchedule';
import { useState } from 'react';
import { connectToDatabase } from '../utils/mongodb';

export default function admin({ barbersDatabase }: any) {
  const [selectedBarber, setSelectedBarber] = useState({})

  return (
    <div>
      <h2 className="border-b-2 text-2xl">Giovanni's Admin Page</h2>
      <div className='border-b-2'>
        <h2 className="text-2xl">Add/Remove Barber</h2>
        <SignUpForm addBarber={"Add Barber"} />
      </div>

      <div className='border-b-2'>
        <h2 className="text-2xl">Select Barber</h2>
        {barbersDatabase.map((barber: any, index: number) => {
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

      <div className='border-b-2'>
        <h2 className="text-2xl">Schedule Times</h2>
        <AdminSchedule />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const barbersDoc = await db
    .collection("admin_barbers")
    .find({})
    .toArray();

  return {
    props: {
      barbersDatabase: JSON.parse(JSON.stringify(barbersDoc))
    }
  }
}
