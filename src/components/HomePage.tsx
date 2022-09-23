import Image from 'next/image';
import Link from 'next/link';
import cutLogo from '../../public/theCutLogo.png'
import {Barber} from './Barbers/Barber';
import {useState} from 'react';
//import { signOut } from 'next-auth/react'

type TechnologyCardProps = {
  name: string;
  description: string;
  color?: "red" | "blue" | "orange"
};

const TechnologyCard = ({ name, description, color="orange" }: TechnologyCardProps) => {
  return (
    <Link href={`/barbers#${name}`}>
      <section 
        className={`button-transition hover:cursor-pointer flex flex-col justify-center p-10 bg-red-300 duration-500 border-2 border-white rounded shadow-xl motion-safe:hover:scale-110 motion-safe:hover:bg-gray-100`}
      >
        <h2 className={`text-2xl text-red-600`}>{name}</h2>
        <p className="text-md text-gray-600">{description}</p>
      </section>
    </Link>
  );
};

function HomePage({barbers}: any) {
  console.log(barbers)
  return(
    <>
      <div className="bg-wrap">
        <Image
          className="opacity-100"
          src="/barbershop.jpg"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

        {/* <button onClick={() => signOut()}>Sign Out</button> */}
      <div
        className="pb-8 flex flex-col items-center bg-orange-200 border-white border-double border-t-4 bg-gray-900"
      >
        <div className="text-3xl text-gray-100 pt-8">
          <Link href="/barbers">Meet the Barbers</Link>
        </div>
        <div className="grid  justify-center gap-3 pt-3 my-3 text-center md:grid-cols-1 lg:w-2/5">
          <TechnologyCard
            name={barbers[0].name}
            description="The Man with the plan"
            color="red"
          />
          <TechnologyCard
            name={barbers[1].name}
            description="Barber Extordinaire"
            color="blue"
          />
          <TechnologyCard
            name={barbers[2].name}
            description="Barber, motocyclist, gamer"
            color="red"
          />
        </div>
      </div>


      <div className="w-full h-44 md:h-36 flex flex-col items-center pt-4 bg-black border-t-2 border-white">
        <a target="_blank" rel="noopener noreferrer" href="https://www.thecut.co/" className='relative overflow-hidden rounded-lg h-20 w-40 border-4 border-white'>
        <Image
          className="opacity-100"
          src={cutLogo}
          layout='fill'
          objectFit='cover'
        ></Image>
        </a>
        <div className="text-2xl text-center text-gray-100">Download theCut app to schedule an appointment</div>
      </div>

    </>
  )
}

export default HomePage;

