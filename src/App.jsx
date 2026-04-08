import { useState, useEffect } from 'react'
import { getUpcomingLaunches } from "./services/launchService"
import LaunchCard from './components/LaunchCard'
import './App.css'
import Header from './components/Header'

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
    content = <p>Calendar view coming soon!</p>
  }


  return (
    <div className="app">
      <Header onViewChange={setView}/>
      <p>Fetched {launches.length} upcoming launches</p>
      {content}
    </div>
  )
}

export default App
