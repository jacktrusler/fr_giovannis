import Image from "next/image"
import { Dispatch, ReactElement, SetStateAction, useState } from "react"
import {BarbersScheme, PriceScheme} from "../../mongoDB/model/barbers";
import { PriceCard } from "./PriceCard"

export interface PricingProps {
  allPrices: PriceScheme[];
  allBarbers: BarbersScheme[];
  setBarberIndex: Dispatch<SetStateAction<number>>;
  barberIndex: number;
}

export default function Pricing(props: PricingProps): ReactElement {
  const {allBarbers, allPrices, setBarberIndex, barberIndex} = props;
  const [selected, setSelected] = useState("");
  return (
    <div className="w-100 pb-16 bg-gray-700 flex-col items-center">
      <div className="w-100 pt-8 flex-col justify-center items-center border-white border-double border-t-4 w-full">
        <div className="flex justify-center w-100">
          <div className="anchor-pricing" id="pricing"></div>

          {allBarbers.map((barber, index) => {
            return (
              <a 
                key={barber.name}
                onClick={() => setBarberIndex(index)}
                className="custom-shadow mx-4 flex-col bg-gray-200 items-center rounded-lg border shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 hover:cursor-pointer">
                <div className="relative overflow-hidden border border-slate-200 h-32 rounded-lg w-24">
                  <Image
                    src={"https://picsum.photos/301/300"}
                    layout='fill'
                    objectFit="cover"
                  >
                  </Image>
                </div>
                <div className="flex justify-between w-full leading-normal">
                  <h5 className="pl-2 mb-2 text-center text-xl font-bold tracking-tight text-gray-600">{barber.name?.split(" ", 1)}</h5>
                </div>
              </a>
            )
          }
          )}

        </div>
      </div>

      <div className="pt-8 text-center text-white text-2xl">{`${allBarbers[barberIndex]?.name} Haircuts`}</div>

      <div className="flex justify-center w-100">
        <table className="border-gray-700 border-2 shadow-2xl">
          <tbody>
            {allPrices?.map((priceCard) => (
              <tr key={priceCard._id} className="w-100 bg-gray-700 flex justify-center">
                <PriceCard 
                  _id={priceCard._id}
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
