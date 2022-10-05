import type { ReactElement } from "react";
import Image from "next/image";

interface BarberProps {
 pictureSrc?: string;
  name?: string;
  description?: string;
  title?: string;
  children?: ReactElement;
}

export function Barber(props: BarberProps): ReactElement {
  const {
    pictureSrc="https://picsum.photos/400/400", 
    name = "Gio", 
    description="No desription provided",
    title="Barber",
    children,
  } = props

  return (
      <div id={name} className={`flex-wrap pt-8 pb-8 justify-center bg-gray-700 `}>
        <div className="w-100 flex justify-center">
          <div className="custom-shadow rounded-xl overflow-hidden md:h-80 md:w-80 h-48 w-48 relative shadow-2xl"> 
              <Image 
                src={pictureSrc} 
                layout="fill" 
                objectFit="contain"
                >
              </Image>
          </div>
        </div>


      <div className="flex w-100 justify-center">
        <div className="pt-4 text-center" style={{width: 600}}>
        <div className={`flex flex-col text-3xl pt-8 text-blue-600`}>
          {name}
          <span className="text-xl text-blue-400">{title}</span>
        </div>
          <blockquote>
            <p className="text-xl text-blue-100">
              {description}
            </p>
          </blockquote>
        </div>
      </div>
      {children}
      </div>
  )
}
