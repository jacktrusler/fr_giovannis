import DatePicker from "react-datepicker"
import { useState } from "react"
import {
  previousSunday,
  nextMonday,
  nextTuesday,
  nextWednesday,
  nextThursday,
  nextFriday,
  nextSaturday,
} from "date-fns"

function AdminSchedule() {
  const [startDate, setStartDate] = useState(new Date());

  let prevSunday;
  //if day or picked day is Sunday, keep it
  if (startDate.getDay() === 0) {
    prevSunday = startDate
  } else {
    prevSunday = previousSunday(startDate);
  }

  const pickedWeekArr = [
    prevSunday,
    nextMonday(prevSunday),
    nextTuesday(prevSunday),
    nextWednesday(prevSunday),
    nextThursday(prevSunday),
    nextFriday(prevSunday),
    nextSaturday(prevSunday),
  ]

  return (
    <div className="admin-schedule-wrapper">
      <h3 className="text-xl">Pick Week</h3>
      <DatePicker
        className="
            block
            w-40
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      <div>Week of {prevSunday.toDateString()}</div>
      <form>
        <div className="week-container flex flex-wrap justify-center">
          {pickedWeekArr.map((day: Date) =>
            <div key={day.getDay()} className="border-l border-b pl-2 pb-2 mb-4 w-44">
              <h4 className="text-lg">{day.toDateString()}</h4>
              <h3 className="text-xl">Start Time</h3>
              <input type={"time"} className="form-control
                  block
                  w-40
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="Start Time" placeholder="Start Time" />
              <h3 className="text-xl">End Time</h3>
              <input type={"time"} className="form-control
                  block
                  w-40
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="End Time" placeholder="Start Time" />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default AdminSchedule;
