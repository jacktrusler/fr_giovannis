import { Dispatch, ReactElement, SetStateAction, useState } from "react"

export interface PriceProps {
  haircut?: string;
  description?: string;
  price?: string;
  addPrice: (newPriceCard: any) => Promise<void>;
  setAnotherPrice: Dispatch<SetStateAction<boolean>>;
  anotherPrice: boolean;
}

export function PriceCardModal(props: PriceProps): ReactElement {
  const {
    price = "$20",
    haircut = "shave",
    description="No desription provided",
    addPrice,
    setAnotherPrice,
    anotherPrice,
  } = props

  const [priceCard, setPriceCard] = useState({
    price,
    haircut,
    description,
  })
  return (
        <td className="flex w-96 bg-gray-600 shadow-xl mb-1 rounded">
          <textarea 
          className="flex w-36 items-center pl-2 pt-1 text-md pr-2 border-2 border-green-500 w-28 h-20 font-semibold tracking-tight"
          placeholder={haircut}
          onBlur={(e) => 
            setPriceCard({
              ...priceCard,
              haircut: e.target.value,
            })
          } 
        />
          <textarea 
            className="px-2 flex items-center border-2 border-green-500"
            placeholder={description}
            onBlur={(e) => 
              setPriceCard({
                ...priceCard,
                description: e.target.value,
              })
            } 
        />
          <input 
            className="w-20 text-green-500 text-2xl border-2 border-green-500"
            placeholder={price} 
            value={priceCard.price} 
            onChange={(e) => 
              setPriceCard({
                ...priceCard,
                price: e.target.value,
              })
            } 
          />
        <div className="bg-white flex flex-col items-center justify-around w-8">
          <i 
            className="fa-solid fa-circle-plus text-green-700 hover:cursor-pointer"
            onClick={() => addPrice(priceCard)}
          />
          <i 
          className="fa-solid fa-circle-minus text-red-700 hover:cursor-pointer"
          onClick={() => setAnotherPrice(false)}  
        ></i>
        </div>
 
    </td>
  )
}
