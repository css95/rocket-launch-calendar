import { useState, useEffect } from 'react'
import { getUpcomingLaunches } from "./services/launchService"
import LaunchCard from './components/LaunchCard'
import './App.css'
import Header from './components/Header'
import CalendarView from './components/CalendarView'

function App() {

  const [launches, setLaunches] = useState([])
  const [view, setView] = useState('list')

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => {
        setLaunches(data.results)
      })
      .catch(error => {
        console.log('error:', error)
      })
  }, [])

  let content
  if (view === 'list') {
    content = launches.map(launch => (
        <LaunchCard key={launch.id} launch={launch} />
      ))
  } else {
    content = <CalendarView launches={launches} />
  }


  return (
    <div className="app">
      <Header onViewChange={setView}/>
      {content}
    </div>
  )
}

export default App
