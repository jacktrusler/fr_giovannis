import Image from 'next/image';
import cutLogo from '../../public/theCutLogo.png'
import { Barber } from './Barbers/Barber';
import { useEffect, useState } from 'react';
import Pricing from './Pricing/Pricing';
import BarberCard from './Barbers/BarberCard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../features/store';
import {fetchBarbers} from '../features/barbers/barbersSlice';
import {Hours} from './Hours/Hours';
//import { signOut } from 'next-auth/react'

function HomePage() {
  const [barberIndex, setBarberIndex] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const barbersStatus = useSelector((state: RootState) => state.barbers.status)
  const allBarbers = useSelector((state: RootState) => state.barbers.allBarbers)
  const dispatch = useDispatch() as any;

  useEffect(() => {
    if (barbersStatus === 'idle') {
      dispatch(fetchBarbers())
    }
  }, [])

  return (
    <>
      <div
        className="bg-wrap">
        <Image
          src="/barbershop.jpg"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

      {/* <button onClick={() => signOut()}>Sign Out</button> */}
      <div className="anchor" id="meet-the-barbers"></div>
      <div
        className="pb-8 flex flex-col items-center bg-orange-200 border-white border-double border-t-4 bg-gray-700"
      >
        <div className="text-3xl text-white pt-8">
          <span >Meet the Barbers</span>
        </div>
        <div className="grid custom-shadow justify-center gap-3 pt-3 my-3 text-center md:grid-cols-1 lg:w-2/5">
          {allBarbers.map((barber, index: number) => {
            return (
              <BarberCard
                key={barber.name}
                name={barber.name}
                title={barber.title}
                index={index}
                setBarberIndex={setBarberIndex}
                setIsSelected={setIsSelected}
              />
            )
          })}
        </div>
      </div>
      {allBarbers[barberIndex] && isSelected ? (
        <Barber
          name={allBarbers[barberIndex].name}
          title={allBarbers[barberIndex].title}
          description={allBarbers[barberIndex].description}
          pictureSrc={allBarbers[barberIndex].imgUri}
        />
      ) : (
        <div className="pt-8 pb-8  w-100 flex justify-center flex-wrap justify-around bg-gray-700">
            {allBarbers.map((barber, index: number) => {
            return (
              <div key={barber.name}>
                <div
                  className="rounded-xl custom-shadow hover:cursor-pointer overflow-hidden md:h-80 md:w-80 h-48 w-48 relative"
                  onClick={() => {
                    setBarberIndex(index)
                    setIsSelected(true)
                  }}
                >
                  <Image
                    src={barber.imgUri as string || 'https://picsum.photos/400/400'}
                    layout="fill"
                    objectFit="contain"
                  >
                  </Image>
                </div>
                <div className='text-white text-2xl pt-8 text-center'>{barber.name}</div>
              </div>
            )
          })}
        </div>
      )
      }
      <div className="anchor" id="pricing"></div>
      <Pricing 
        allBarbers={allBarbers}
        allPrices={allBarbers[barberIndex]?.prices}
        setBarberIndex={setBarberIndex}
        barberIndex={barberIndex}
      />

      <div className="anchor" id="hours"></div>

      <Hours 
        barberIndex={barberIndex}  
      />
      <div className="w-full h-44 md:h-36 flex flex-col items-center pt-4 bg-gray-900 border-t-2 border-white">
        <a target="_blank" rel="noopener noreferrer" href="https://www.thecut.co/" className='relative overflow-hidden rounded-lg h-20 w-40 border-4 border-white'>
          <Image
            src={cutLogo}
            layout='fill'
            objectFit='cover'
          ></Image>
        </a>
        <div className="text-2xl text-center text-gray-100">
          Download theCut app to schedule an appointment
        </div>
      </div>

    </>
  )
}

export default HomePage;

