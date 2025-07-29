import Container from '../../components/Container/Container'
import IconContainer from '../../components/IconContainer/IconContainer'
import DynamicList from '../../components/DynamicList/DynamicList'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { useTranslation } from 'react-i18next';

// font awesome icons
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMoon, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function HomePage(){
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
      const currentLang = i18n.language;

      const nextLang = currentLang === 'en' ? 'es' : 'en';

      i18n.changeLanguage(nextLang);
  };

    const projects = [
        {
          header: t('projects.purchaseOrders.header'),
          text: t('projects.purchaseOrders.text')
        },
        {
          header: t('projects.accountsReceivablePayable.header'),
          text: t('projects.accountsReceivablePayable.text')
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
                  {t('mainMessage1')}
                  <br/>
                  {t('mainMessage2')}
                  <br/>
                  {t('mainMessage3')}
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
            <Container title={t('projectsHeader')} gridContainer="projects">
                  <DynamicList list={projects}/>
            </Container>
            <Container title={t('contactHeader')} gridContainer="links">
                  <div className='IconContainerList'>
                    <IconContainer icon={faGithub} link='https://github.com/RuyLuna' text="Mi Github" faClasses='fa-2x'/>
                    <IconContainer icon={faLinkedin} link='https://linkedin.com/in/ruy-jesé-luna-sandoval-b88209279' text="Mi Linkedin" faClasses='fa-2x'/>
                    <IconContainer icon={faFile} route={true} link={i18n.language == 'en' ? '/cvEN' : '/cvES'} text="Mi CV" faClasses='fa-2x'/>
                    <IconContainer icon={faEnvelope} hover={false} text="ruyjluna@gmail.com" faClasses='fa-2x'/>
                  </div>
            </Container>
            <Container title="Lenguaje // Languages" gridContainer="fun">
                  <div className="ToggleButtonContainer">
                    <button className="ToggleButton" onClick={toggleLanguage}>
                      {i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                    </button>
                  </div>
                  
            </Container>
            <Container title={t('skillsHeader')} gridContainer="skills">
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