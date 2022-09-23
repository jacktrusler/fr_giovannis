import type { ReactElement } from "react";

interface PriceProps{
  price?: string;
  haircut?: string;
  description?: string;
}

export function PriceCard(props: PriceProps): ReactElement {
  const {
    price = "$20",
    haircut = "shave",
    description="No desription provided",
  } = props

  return (
        <td className="flex w-96 bg-gray-600 shadow-xl mb-1 rounded">
      <div>
            <p className="flex w-32 items-center pl-2 pt-1 text-md pr-2 border-gray-400 border-r-4 border-double w-28 h-20 font-semibold tracking-tight text-gray-100">{haircut}</p>
      </div>
            <p className="px-2 flex items-center font-normal text-gray-100">{description}</p>
            <p className="p-2 pr-4 pt-6 mb-1 font-normal text-green-300 text-2xl">{price}</p>
        </td>
  )
}
