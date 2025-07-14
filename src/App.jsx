import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './components/Container/Container'
import IconContainer from './components/IconContainer/IconContainer'
import './App.css'

// font awesome icons

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMoon, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div className="containers">
        <Container title="Welcome" gridContainer="mainContainer smallTitle">
          <div style={{
            display: 'flex'
          }}>
            <p style={{
              width: '70%'
            }}>
              Hola! Soy Ruy Luna un programador web full stack, especializado en Angular
              con experiencia trabajando en el desarrollo y mantenimiento de sistemas empresariales.
              <br/>
              Sin embargo listo para enfrentar nuevos retos, por ejemplo realice este portafolio con ReactJS.
              <br/>
              Sientete libre de contactarme para un nuevo projecto, una oferta o solo para saludar!
            </p>
            <p style={{
              width: '10%'
            }}>
              <FontAwesomeIcon className='fa-5x' icon={faMoon} style={{
                alignSelf: 'center',
                paddingLeft: '60%'
              }}/>
            </p>
          </div>
          
        </Container>
        <Container title="Projects" gridContainer="projects">

        </Container>
        <Container title="Contact me" gridContainer="links">
              <div className='IconContainerList'>
                <IconContainer icon={faGithub} faClasses='fa-2x'/>
                <IconContainer icon={faLinkedin} faClasses='fa-2x'/>
                <IconContainer icon={faEnvelope} faClasses='fa-2x'/>
                <IconContainer icon={faFile} faClasses='fa-2x'/>
              </div>
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
          <p>© 2025 - Ruy Luna</p>
        </Container>
      </div>
    </body>
      
    </>
  )
}

export default App
