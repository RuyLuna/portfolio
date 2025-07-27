import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './IconContainer.css';

export default function IconContainer({ icon, text, hover = true, link = null, route = false, faClasses }) {
    const containerClassName = hover ? 'IconContainer hover' : 'IconContainer';

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        alignContent: 'center'
    };

    const content = (
        <>
            <div style={{
                placeContent: 'center',
                padding: '.8rem'
            }}>
                <FontAwesomeIcon className={faClasses} icon={icon} />
            </div>
            <div>
                <p>{text}</p>
            </div>
        </>
    );

    if (route) {
        return (
            <Link to={link || "#"} className={containerClassName} style={gridStyle}>
                {content}
            </Link>
        );
    } else {
        return (
            <a href={link || "#"} className={containerClassName} style={gridStyle}>
                {content}
            </a>
        );
    }
}