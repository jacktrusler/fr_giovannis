import type { ReactElement } from "react";
import Image from "next/image";

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
        <div className="flex max-w-sm bg-white rounded-lg border-2 border-orange-400 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex p-6">
            <a href="#">
                <h5 className="mb-2 text-xl pr-2 border-orange-400 border-r-4 border-double w-28 h-20 font-semibold tracking-tight text-gray-700 dark:text-white">{haircut}</h5>
            </a>
            <p className="px-2 mb-1 font-normal text-gray-700 dark:text-gray-600">{description}</p>
</div>
            <p className="p-2 pr-4 pt-6 mb-1 font-normal text-green-700 text-2xl dark:text-gray-400">{price}</p>
        </div>
  )
}
