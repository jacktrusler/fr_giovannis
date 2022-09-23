import Image from "next/image"
import type { ReactElement } from "react"
import {PriceCard} from "./PriceCard"
import cutLogo from "../../public/theCutLogo.png"

export default function pricing(): ReactElement {
  const barbers = ["Gio","Dan", "Sean"]
  return (
    <div className="w-100 bg-orange-200 flex-col items-center">
      <div className="w-100 pt-4 flex-col justify-center items-center">
        <div className="text-center text-2xl">Select a Barber to see their pricing</div>
        <div className="flex justify-center w-100 pt-4">

          <a className="mx-4 flex-col bg-red-200 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/301/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-red-600">{barbers[0]}</h5>
            </div>
          </a>

          <a className="mx-4 flex-col bg-blue-200 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/300/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-blue-600">{barbers[1]}</h5>
            </div>
          </a>

          <a className="mx-4 flex-col bg-red-200 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/302/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-red-600">{barbers[2]}</h5>
            </div>
          </a>


        </div>
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Haircut" 
          description="Just your standard haircut." 
          price="$20"
        />
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Bald Fade Skin Fade Razor Fade" 
          description="Any haircut where I go down to the skin." 
          price="$23"
          />
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Beard Work with Haircut" 
          description="Beard Trim or line up and a normal haircut." 
          price="$25"
        />
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Beard Trim Only" 
          description="Beard work, trim, lineup without a haircut" 
          price="$15"
        />
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Bald Head Shave" 
          description="Hot towels and razor shave or machine cut" 
          price="$20"
        />
      </div>
      <div className="w-100 pt-4 flex justify-center">
        <PriceCard 
          haircut="Buzz Cut" 
          description="Single length cut using a electric blade"
          price="$17"
        />
      </div>
      <div className="w-100 pb-4 pt-4 flex justify-center">
        <PriceCard 
          haircut="Seniors" 
          description="All senior haircuts are at a reduced price."
          price="$17"
        />
      </div>

      <div className="w-full h-52 md:h-40 flex flex-col items-center border-t-8 border-double border-white bg-black">
        <p className="text-2xl text-center p-4 text-white">Download theCut app to schedule an appointment</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.thecut.co/" className='relative overflow-hidden rounded-lg h-20 w-40 mb-2 border-4 border-white'>
          <Image
            src={cutLogo}
            layout='fill'
            objectFit='cover'
          ></Image>
        </a>
      </div>

    </div>
  )
}
