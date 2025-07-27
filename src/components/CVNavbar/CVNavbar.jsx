import { Link } from 'react-router-dom';
import './CVNavbar.css';

export default function CVNavbar({ onDownloadClick }) {
    return (
        <nav className="cv-navbar-container">
            <div className="cv-navbar-buttons">
                <Link to="/" className="cv-navbar-button">
                    Back to Portfolio
                </Link>

                <a
                    href="../../../public/RuyLunaCV_ES.pdf"
                    download="RuyLuna_CV.pdf"
                    className="cv-navbar-button"
                    onClick={onDownloadClick}
                >
                    Download PDF
                </a>
            </div>
        </nav>
    );
}