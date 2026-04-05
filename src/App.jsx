import { useState, useEffect } from 'react'
import { getUpcomingLaunches } from "./services/launchService"

function App() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => {
        console.log('data is:', data)
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
    </div>
  )
}

export default App
