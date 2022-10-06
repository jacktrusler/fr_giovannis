import type { ReactElement } from "react";
import {PriceScheme} from "../../mongoDB/model/barbers";

export function PriceCard(props: PriceScheme): ReactElement {
  const {
    _id="0",
    price = "$20",
    haircut = "shave",
    description="No desription provided",
  } = props

  return (
        <td className="flex justify-between w-80 bg-gray-600 shadow-xl mb-1 rounded">
      <div>
            <p className="flex w-32 items-center pl-4 pr-2 pt-1 text-md border-gray-400 border-r-4 border-double w-28 h-20 font-semibold tracking-tight text-gray-100">{haircut}</p>
      </div>
            <p className="px-2 flex items-center text-center font-normal text-gray-100">{description}</p>
            <p className="p-2 flex justify-self-end pr-4 pt-6 mb-1 font-normal text-green-300 text-2xl">{price}</p>
        </td>
  )
}
