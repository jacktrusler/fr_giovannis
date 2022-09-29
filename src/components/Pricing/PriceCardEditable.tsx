import { ReactElement, useState } from "react";
import { PriceData } from '../../data/priceData' 
import axios from 'axios'

export function PriceCardEditable(props: PriceData): ReactElement {
  const {
    _id="0",
    price = "$20",
    haircut = "shave",
    description="No desription provided",
  } = props

  const [priceCard, setPriceCard] = useState<PriceData>({
    _id,
    price,
    haircut,
    description,
  })

  async function submitChanges(){
    const data = await axios.put(`http://localhost:3000/api/prices/?priceId=${_id}`, priceCard)
  }

  return (
        <td className="flex w-96 bg-gray-600 shadow-xl mb-1 rounded">
        <textarea 
          className="flex w-36 items-center pl-2 pt-1 text-md pr-2 border border-black w-28 h-20 font-semibold tracking-tight"
          placeholder={haircut}
          onBlur={(e) => 
            setPriceCard({
              ...priceCard,
              haircut: e.target.value,
            })
          } 
        />
          <textarea 
            className="px-2 flex items-center border border-black"
            placeholder={description}
            onBlur={(e) => 
              setPriceCard({
                ...priceCard,
                description: e.target.value,
              })
            } 
        />
          <input 
            className="w-20 text-green-500 text-2xl border border-black"
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
            className="fa-solid fa-circle-check text-green-700 hover:cursor-pointer"
            onClick={submitChanges}
          />
          <i className="fa-solid fa-trash-can text-red-700 hover:cursor-pointer"></i>
        </div>
      </td>
  )
}
