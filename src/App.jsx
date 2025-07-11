import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './components/Container'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div className="containers">
        <Container title="Welcome" gridContainer="mainContainer smallTitle">
          Hola! Soy Ruy Luna un programador web full stack, especializado en Angular
          con experiencia trabajando en el desarrollo y mantenimiento de sistemas empresariales.
          Pero listo para enfrentar nuevos retos, por ejemplo realice este portafolio con ReactJS.
          <br/>
          Sientete libre de contactarme para un nuevo projecto, una oferta o solo para saludar!
        </Container>
        <Container title="Projects" gridContainer="projects">

        </Container>
        <Container title="Contact me" gridContainer="links">
        
        </Container>
        <Container title="Fun" gridContainer="fun">
        
        </Container>
        <Container title="Skills" gridContainer="skills">
          <ul className="cycling-list">
            <li>React</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Git</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Jira</li>
          </ul>
        </Container>
        <Container title="" gridContainer="footer smallText">
          © 2025 - Ruy Luna
        </Container>
      </div>
    </body>
      
    </>
  )
}

export default App
