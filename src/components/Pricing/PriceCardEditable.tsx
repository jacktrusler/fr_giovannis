import { ReactElement, useState } from "react";
import axios from 'axios'
import {BarbersScheme} from "../../mongoDB/model/barbers";
import {fetchBarbers} from "../../features/barbers/barbersSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../features/store";

export interface PriceData {
  _id?: string;
  haircut?: string;
  description?: string;
  price?: string;
}

interface PriceProps extends PriceData {
  currentBarber: BarbersScheme
}

export function PriceCardEditable(props: PriceProps): ReactElement {
  const {
    currentBarber,
    _id,
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
  const dispatch = useDispatch() as AppDispatch;

  async function submitChanges(){
    console.log(priceCard)
    const data = await axios.put(`api/prices/?barberId=${currentBarber._id}&priceId=${_id}`, priceCard)
    dispatch(fetchBarbers())
  }

  async function deleteCard(){
    const data = await axios.delete(`api/prices/?barberId=${currentBarber._id}&priceId=${_id}`)
    dispatch(fetchBarbers())
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
          <i 
            className="fa-solid fa-trash-can text-red-700 hover:cursor-pointer"
            onClick={deleteCard}
          />
        </div>
      </td>
  )
}
