//import WeeklyScheduler from "../components/WeeklyScheduler";
import Image from "next/image";
import {Barber} from "../components/Barber";

function barbers() {
  return (
    <div>
      <Barber 
        name="Giovanni Ricchiuti" 
        title="Owner"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
      <Barber 
        name="Daniel VanHorn" 
        color="orange"
        pictureSrc="https://picsum.photos/401/401"
        title="Barber"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
      <Barber 
        name="Sean Merritt" 
        pictureSrc="https://picsum.photos/401/402"
        title="Warrior"
        description="The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels." 
      />
    </div>
  )
}

export default barbers;
