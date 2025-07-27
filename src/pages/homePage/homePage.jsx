import Container from '../../components/Container/Container'
import IconContainer from '../../components/IconContainer/IconContainer'
import DynamicList from '../../components/DynamicList/DynamicList'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

// font awesome icons

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMoon, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function HomePage(){
    const projects = [
        {
        header: 'Ordenes de compra',
        text: `Sistema donde sucursales realizan ordenes de compra, un organismo central u otra sucursal,
                administra el camino de la orden y el surtido de productos desde que se pide hasta que se surte.
                Desarrollado en Angular 14+ Con NodeJS y MySQL.`
        },
        {
        header: 'Cuentas por cobrar y por pagar',
        text: `Duo de sistemas para llevar la cartera de los clientes, generar los movimientos, sus parcialidades y manejar los pagos realizados. Todo configurable.
                Desarrollado con un enfoque en la velocidad y rapida generación de reportes.`
        }
    ]

    return <div className="containers">
            <Container title="Saludos!" gridContainer="mainContainer smallTitle">
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
            <Container title="Algunos de los projectos en los que he trabajado" gridContainer="projects">
                  <DynamicList list={projects}/>
            </Container>
            <Container title="Contactame" gridContainer="links">
                  <div className='IconContainerList'>
                    <IconContainer icon={faGithub} link='https://github.com/RuyLuna' text="Mi Github" faClasses='fa-2x'/>
                    <IconContainer icon={faLinkedin} link='https://linkedin.com/in/ruy-jesé-luna-sandoval-b88209279' text="Mi Linkedin" faClasses='fa-2x'/>
                    <IconContainer icon={faFile} route={true} link='/cv' text="Mi CV" faClasses='fa-2x'/>
                    <IconContainer icon={faEnvelope} hover={false} text="ruyjluna@gmail.com" faClasses='fa-2x'/>
                  </div>
            </Container>
            <Container title="Lenguaje" gridContainer="fun">
                  {/* <ToggleButton/> */}
            </Container>
            <Container title="Habilidades principales" gridContainer="skills">
              <ul className="cycling-list">
                <li>Angular</li>
                <li>React</li>
                <li>Typescript</li>
                <li>NodeJS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Jira</li>
                <li>Git</li>
              </ul>
            </Container>
            <Container title="" gridContainer="footer smallText">
              <p>© 2025 - Ruy Luna</p>
            </Container>
          </div>
}