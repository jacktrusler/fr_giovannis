import {Dispatch, SetStateAction} from "react";

type BarberCardProps = {
  name?: string;
  title?: string;
  index: number;
  setBarberIndex: Dispatch<SetStateAction<number>>;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

export default function BarberCard ({ name, title, index, setBarberIndex, setIsSelected }: BarberCardProps) {
  return (
    <section
      className={`
          button-transition hover:cursor-pointer flex flex-col justify-center p-10 duration-500 
          border-2 border-gray-300 rounded shadow-xl motion-safe:hover:scale-110
          bg-gradient-to-b from-white to-gray-300`
      }
      onClick={() => {
        setBarberIndex(index)
        setIsSelected(true)
      }}
    >
      <h2 className={`text-2xl text-black`}>{name}</h2>
      <p className="text-md text-gray-600">{title}</p>
    </section>
  );
};

