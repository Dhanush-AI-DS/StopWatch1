import { useState } from 'react'
import './App.css'
import './Components/StopWatchComponents.css'
import Stopwatch from './Components/StopWatchComponents'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stopwatch/>
    </>
  )
}

export default App
