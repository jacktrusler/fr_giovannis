import type { ReactElement } from "react";
import Image from "next/image";

interface BarberProps {
  pictureSrc?: string;
  color?: "red" | "orange" | "blue";
  name?: string;
  description?: string;
  title?: string;
  children?: ReactElement;
}

export function Barber(props: BarberProps): ReactElement {
  const {
    pictureSrc="https://picsum.photos/400/400", 
    color = "red", 
    name = "Gio", 
    description="No desription provided",
    title="Barber",
    children,
  } = props

  return (
      <div id={name} className={`flex-wrap pt-8 pb-4 justify-center bg-gray-900 `}>
        <div className="w-100 flex justify-center">
          <div className="rounded-xl overflow-hidden border-4 border-white md:h-80 md:w-80 h-48 w-48 relative"> 
              <Image 
                src={pictureSrc} 
                layout="fill" 
                objectFit="contain"
                >
              </Image>
          </div>
        </div>

      <div className="flex w-100 justify-center">
        <div className="pt-4 text-center space-y-4" style={{width: 600}}>
          <blockquote>
            <p className="text-xl text-blue-100">
              {description}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className={`text-3xl text-${color}-600`}>
              {name}
            </div>
            <div className="text-2xl text-blue-100 text-slate-700">
              {title}
            </div>
          </figcaption>
        </div>
      </div>
      {children}
      </div>
  )
}
