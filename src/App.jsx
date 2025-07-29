import { Routes, Route } from 'react-router-dom';
import './i18n';

import './App.css'
import './pages/homePage/homePage'
import HomePage from './pages/homePage/homePage'
import CVPage_EN from './pages/CVPage/CVPage_EN';
import CVPage_ES from './pages/CVPage/CVPage_ES';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cvEN" element={<CVPage_EN></CVPage_EN>}></Route>
        <Route path="/cvES" element={<CVPage_ES></CVPage_ES>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
