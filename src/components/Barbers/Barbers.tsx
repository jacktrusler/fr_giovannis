//import WeeklyScheduler from "../components/WeeklyScheduler";
import Image from "next/image";
import {Barber} from "./Barber";
import cutLogo from "../../public/theCutLogo.png"

function barbers({barbers}: {barbers: string[]}) {
  return (
    <div>
      <Barber 
        name={barbers[0]}
        title="Owner"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
      <Barber 
        name={barbers[1]} 
        pictureSrc="https://picsum.photos/401/401"
        title="Barber"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
      <Barber 
        name={barbers[2]} 
        pictureSrc="https://picsum.photos/401/402"
        title="Warrior"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
      <div className="w-full h-52 md:h-40 flex flex-col items-center border-t-8 border-double border-white bg-black">
        <p className="text-2xl p-4 text-center text-white">Download theCut app to schedule an appointment</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.thecut.co/" className='relative overflow-hidden rounded-lg h-20 w-40 mb-2 border-4 border-white'>
          <Image
            src={cutLogo}
            layout='fill'
            objectFit='cover'
          ></Image>
        </a>
      </div>
    </div>
  )
}

export default barbers;
