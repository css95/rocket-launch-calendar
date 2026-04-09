import { useState } from 'react'
import './CalendarView.css'

function CalendarView({ launches }) {

    const [currentDate, setCurrentDate] = useState(new Date())

    const month = currentDate.toLocaleString('default', {month: 'long'})
    const year = currentDate.getFullYear()

    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay()

    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
    }

    let emptyCellCount
    if (firstDayOfMonth === 0) {
        emptyCellCount = 6
    } else {
        emptyCellCount = firstDayOfMonth - 1
    }

     const emptyDays = [];
     for (let i = 0; i < emptyCellCount; i++) {
        emptyDays.push(i)
     }


    return (
        <div className="calendar">
            <div className="calendar__header">
                <button className="btn-previous" onClick={() => setCurrentDate (new Date(year, currentDate.getMonth() -1, 1))}>Previous</button>
                <h2>{month} {year}</h2>
                <button className="btn-next" onClick={() => setCurrentDate (new Date(year, currentDate.getMonth() +1, 1))}>Next</button>
            </div>
            <div className="calendar__grid">
                <div className="calendar__day-label">Mon</div>
                <div className="calendar__day-label">Tue</div>
                <div className="calendar__day-label">Wed</div>
                <div className="calendar__day-label">Thu</div>
                <div className="calendar__day-label">Fri</div>
                <div className="calendar__day-label">Sat</div>
                <div className="calendar__day-label">Sun</div>

            {emptyDays.map(i => (
                <div key={`cell-${i}`} className='calendar__cell'></div>
            ))}
            
            {days.map(day => {
                const dayLaunches = launches.filter(launch => {
                    const launchDate = new Date(launch.net)
                    
                    const sameDay = launchDate.getDate() === day
                    const sameMonth = launchDate.getMonth() === currentDate.getMonth()
                    const sameYear = launchDate.getFullYear() === year

                    return sameDay && sameMonth && sameYear
                })

                return (
                    <div key={day} className="calendar__cell">
                        <span>{day}</span>
                        {dayLaunches.map(launch => (
                            <div key={launch.id} className="launch-tag">
                                🚀 {launch.name}
                            </div>

                        ))}
                    </div>
                )
            })}

            </div>
        </div>
    )
}

export default CalendarView
