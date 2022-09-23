import DatePicker from "react-datepicker"
import {useState, useEffect} from "react"
import {previousSunday,
        nextMonday,
        nextTuesday,
        nextWednesday,
        nextThursday,
        nextFriday,
        nextSaturday,} from "date-fns"
import styles from "../styles/WeeklyScheduler.module.css"

function WeeklyScheduler() {
  const [startDate, setStartDate] = useState(new Date());
  const [allTimes, setAllTimes] = useState<any>([])
  const prevSunday = previousSunday(startDate);
  const pickedWeekArr = [
    prevSunday,
    nextMonday(prevSunday),
    nextTuesday(prevSunday),
    nextWednesday(prevSunday),
    nextThursday(prevSunday),
    nextFriday(prevSunday),
    nextSaturday(prevSunday),
  ]

  useEffect(() => {
    setAllTimes(intervalBuilder(30,5,21));
  }, [])

  function intervalBuilder(increment: number, startHour?: number, endHour?:number): string[] {
    const timeArr: string[] = []; 
    let currTime: number;
    let endTime: number;
    let hour: number = 0;
    let minute: number = 0;

    if (typeof startHour !== 'undefined') {
      currTime = startHour * 60; 
    } else {
      currTime = 0;
    }

    if (typeof endHour !== 'undefined') {
      endTime = endHour * 60; 
    } else {
      endTime = 1440;
    }

    //1440 minutes in a day
    for (let i=0; currTime<endTime; i++){
      hour = Math.floor(currTime / 60);  
      minute = currTime % 60; 
      timeArr.push(("0" + hour.toString()).slice(-2) + ":" + ("0" + minute.toString()).slice(-2))
      currTime = currTime + increment; 
    }

    return timeArr
  }

  return (
    <div className={styles.weekly_wrapper}>
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        <table className="text-center border-2 w-full">
          <tr className="border-2 border-orange-200 h-16 text-xl">
            <th className="border-r-2">Time</th>
            {pickedWeekArr.map((day:Date) => 
              <th 
                key={day.getDay()}
                className="border-r-2">
              {day.toDateString()}</th>
            )}
          </tr>
            {allTimes.map((time:string) => 
              <tr className="border-b">
                <td 
                    key={time}
                    className="text-lg">
                  {time}</td>
                <td>
                  <input 
                    type={"checkbox"}
                  />
                </td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
              </tr>
            )}
        </table>
    </div>
  )
}

export default WeeklyScheduler;
