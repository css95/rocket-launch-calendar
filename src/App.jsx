import { useState, useEffect } from 'react'
import { getUpcomingLaunches } from "./services/launchService"
import LaunchCard from './components/LaunchCard'

function App() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => {
        setLaunches(data.results)
      })
      .catch(error => {
        console.log('error:', error)
      })
}, [])

  return (
    <div>
      <h1>🚀 Rocket Launch Calendar</h1>
      <p>Fetched {launches.length} upcoming launches</p>
      {launches.map(launch => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  )
}

export default App
