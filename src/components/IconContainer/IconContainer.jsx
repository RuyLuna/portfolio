import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import './IconContainer.css';

export default function IconContainer({ icon, text, faClasses }){
    return <div className="IconContainer" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        alignContent: 'center'
    }}>
        <div style={{
            placeContent: 'center',
            padding: '.8rem'
        }}>
            <FontAwesomeIcon className={faClasses} icon={ icon }/>
        </div>
        <div>
            <p>{ text }</p>
        </div>
    </div>
}