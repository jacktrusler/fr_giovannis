import type { ReactElement } from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../features/store"

interface HoursProps {
  barberIndex: number;
}

export function Hours(props: HoursProps): ReactElement {
  const {barberIndex} = props;
  const allBarbers = useSelector((state: RootState) => state.barbers.allBarbers);

  return (
    <div className="flex justify-center bg-gray-700 pb-8 border-white border-double pt-8 border-t-4">
      <div className="flex flex-col gap-1 border-2 rounded-xl border-gray-600 w-96 p-4 shadow-2xl">
        <div className="text-2xl text-white mb-2">
          <span>{allBarbers[barberIndex]?.name}'s Hours</span>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Monday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Tuesday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Wednesday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Thursday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Friday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Friday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Saturday</div>
            <div>9:00AM - 7:00PM</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-white text-xl">
            <div>Sunday</div>
            <div>Closed </div>
          </div>
        </div>
      </div>
    </div>
  )
}
