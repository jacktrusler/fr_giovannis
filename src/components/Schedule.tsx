import DatePicker from "react-datepicker"
import {useState} from "react"

function Schedule() {
  const [startDate, setStartDate] = useState(new Date());
  const arr = ["10:00","10:30","11:00","11:30","12:00","12:30","1:00","1:30",]
  return (
    <div>
      <div className="flex flex-col bg-orange-200 items-center  w-full">
        <div>
          <span className="text-5xl">Your Barber: </span>
        </div>
        <div>
          <p className="pl-2 text-xl">Check Availability</p>
          <DatePicker className="pl-2" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        </div>
        <span className="mt-4 text-2xl">Available Times</span>
      </div>
      {arr.map((time) => {
        return (
          <div className="flex justify-center bg-orange-200 py-5 w-full">
            <div className="w-48 h-24 text-center border-2 border-orange-300 motion-safe:hover:scale-105 cursor-pointer shadow-xl">{time}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Schedule;
