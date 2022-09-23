import Image from 'next/image';
import Link from 'next/link';
import cutLogo from '../../public/theCutLogo.png'
import {Barber} from './Barbers/Barber';
import {Dispatch, SetStateAction, useState} from 'react';
import {BarberData} from '../data/barberData';
import Pricing from './Pricing/Pricing';
//import { signOut } from 'next-auth/react'

type TechnologyCardProps = {
  name: string;
  description: string;
  color?: "red" | "blue" | "orange"
  setBarberName: Dispatch<SetStateAction<string>>;
};

const TechnologyCard = ({ name, description, setBarberName, color="orange" }: TechnologyCardProps) => {
  return (
      <section 
        className={`button-transition hover:cursor-pointer flex flex-col justify-center p-10 bg-red-300 duration-500 border-2 border-blue-100 rounded shadow-xl motion-safe:hover:scale-110 motion-safe:hover:bg-gray-100`}
        onClick={() => setBarberName(name)}
      >
        <h2 className={`text-2xl text-red-600`}>{name}</h2>
        <p className="text-md text-gray-600">{description}</p>
      </section>
  );
};

function HomePage({barbers}: {barbers: BarberData[]}) {
  const [barberName, setBarberName] = useState<string>('');
  const clickedBarber = barbers.filter((barber: BarberData) => barber.name === barberName)[0]

  return(
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
        className="pb-8 flex flex-col items-center bg-orange-200 border-white border-double border-t-4 bg-gray-900"
      >
        <div  className="text-3xl text-white pt-8">
          <span >Meet the Barbers</span>
        </div>
        <div className="grid  justify-center gap-3 pt-3 my-3 text-center md:grid-cols-1 lg:w-2/5">
          <TechnologyCard
            name={barbers[0].name}
            description="The Man with the plan"
            color="red"
            setBarberName={setBarberName}
          />
          <TechnologyCard
            name={barbers[1].name}
            description="Barber Extordinaire"
            color="blue"
            setBarberName={setBarberName}
          />
          <TechnologyCard
            name={barbers[2].name}
            description="Barber, motocyclist, gamer"
            color="red"
            setBarberName={setBarberName}
          />
        </div>
      </div>
      {clickedBarber ? (
        <Barber 
          name={clickedBarber.name}
          description={clickedBarber.description}
          pictureSrc={clickedBarber.pictureSrc}
        />
      ) : (
        <div className="pt-8 pb-4  w-100 flex justify-center flex-wrap justify-around bg-gray-900">
          {barbers.map((barber) => {
           return (
           <div>
             <div 
                className="rounded-xl hover:cursor-pointer overflow-hidden border-4 border-white md:h-80 md:w-80 h-48 w-48 relative"
                onClick={()=>setBarberName(barber.name)}
              > 
                <Image 
                  src={barber.pictureSrc} 
                  layout="fill" 
                  objectFit="contain"
                  >
                </Image>
            </div>
            <div className='text-white text-2xl text-center'>{barber.name}</div>
          </div>
              )
          })}
          </div>
        )
      }
        <Pricing />
      <div className="w-full h-44 md:h-36 flex flex-col items-center pt-4 bg-black border-t-2 border-white">
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

