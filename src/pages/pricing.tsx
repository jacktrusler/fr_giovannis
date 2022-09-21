import Image from "next/image"
import type { ReactElement } from "react"
import {PriceCard} from "../components/PriceCard"

export default function pricing(): ReactElement {
  const barbers = ["Dan", "Sean", "Gio"]
  return (
    <div className="w-100 min-h-screen bg-orange-200 flex-col items-center">
      <div className="w-100 pt-4 flex-col justify-center items-center">
        <div className="text-center text-2xl">Select a Barber to see their pricing</div>
        <div className="flex justify-center w-100 pt-4">

          <a className="mx-4 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/301/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{barbers[2]}</h5>
            </div>
          </a>

          <a className="mx-4 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/300/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{barbers[0]}</h5>
            </div>
          </a>

          <a className="mx-4 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                    <Image 
                      src={"https://picsum.photos/302/300"} 
                      layout='fill'
                      objectFit="cover"
                      >
                    </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
                <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{barbers[1]}</h5>
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
    </div>
  )
}
