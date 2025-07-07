import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="containers">
        <div className="container mainContainer">
          <h1>Welcome</h1>
        </div>

        <div className="container projects">
          <h1>Projects </h1>
        </div>

        <div className="container links">
          <h1>Contact me</h1>
        </div>

        <div className="container fun">
          <h1>Fun</h1>
        </div>

        <div className="container skills">
          <h1>Skills</h1>
        </div>

        <div className="container footer">
          <h1>Copyright</h1>
        </div>
      </div>
    </>
  )
}

export default App
