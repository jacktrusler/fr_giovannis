import Image from "next/image"
import { ReactElement, useState } from "react"
import { PriceCard } from "./PriceCard"
import { dansPrices } from "../../data/priceData"


export default function Pricing(): ReactElement {
  const pricingBarbers = ["Gio", "Dan", "Sean"]
  const [selected, setSelected] = useState("");
  return (
    <div className="w-100 pb-16 bg-gray-700 flex-col items-center">
      <div className="w-100 pt-16 flex-col justify-center items-center border-white border-double border-t-4 w-full">
        <div className="flex justify-center w-100">

          <div className="anchor-pricing" id="pricing"></div>
          <a className="custom-shadow mx-4 flex-col bg-gray-200 items-center rounded-lg border shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
              <Image
                src={"https://picsum.photos/301/300"}
                layout='fill'
                objectFit="cover"
              >
              </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
              <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-600">{pricingBarbers[0]}</h5>
            </div>
          </a>

          <a className="custom-shadow mx-4 flex-col bg-blue-200 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
              <Image
                src={"https://picsum.photos/300/300"}
                layout='fill'
                objectFit="cover"
              >
              </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
              <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-blue-600">{pricingBarbers[1]}</h5>
            </div>
          </a>

          <a className="custom-shadow mx-4 flex-col bg-gray-200 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
            <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
              <Image
                src={"https://picsum.photos/302/300"}
                layout='fill'
                objectFit="cover"
              >
              </Image>
            </div>
            <div className="flex justify-between w-full leading-normal">
              <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-600">{pricingBarbers[2]}</h5>
            </div>
          </a>
            <a></a>


        </div>
      </div>

      <div className="pt-8 text-center text-white text-2xl">Select a Barber to see available cuts</div>

      <div className="flex justify-center w-100">
        <table className="border-gray-700 border-2 shadow-2xl">
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

    </div>
  )
}
