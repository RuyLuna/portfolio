import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import './pages/homePage/homePage'
import HomePage from './pages/homePage/homePage'
import CVPage from './pages/CVPage/CVPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cv" element={<CVPage></CVPage>}>

        </Route>
      </Routes>
      
      
    </>
  )
}

export default App
