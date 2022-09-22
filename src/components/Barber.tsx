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
      <div id={name} className={`flex-wrap justify-center bg-${color}-200 rounded-xl p-8 dark:bg-slate-800 border-white border-double border-t-8`}>
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
        <div className="pt-6 md:p-8 text-center space-y-4" style={{width: 600}}>
          <blockquote>
            <p className="text-lg font-medium">
              {description}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className={`text-2xl text-${color}-600 dark:text-sky-400`}>
              {name}
            </div>
            <div className="text-xl text-slate-700 dark:text-slate-500">
              {title}
            </div>
          </figcaption>
        </div>
      </div>
      {children}
      </div>
  )
}
