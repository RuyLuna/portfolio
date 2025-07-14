import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

export default function IconContainer({ icon, faClasses }){
    return <div className="IconContainer">
        <FontAwesomeIcon className={faClasses} icon={ icon }/>
    </div>
}